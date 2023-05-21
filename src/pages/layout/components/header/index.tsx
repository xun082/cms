import React, { FC, useState, useEffect } from "react";
import { Layout, Dropdown, Badge, MenuProps, Button } from "antd";
import { useProThemeContext } from "@/hooks/theme";
import styles from "./index.module.scss";
import logo from "@/assets/images/logo192.png";
import {
  SkinOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  GithubOutlined,
  MessageOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { setThemeInfo, removeLocalStorage, TOKEN_KEY } from "@/utils/storage";
import screenfull from "screenfull";
import { useAppDispatch } from "@/store";
import { CollapsedAction } from "@/store/modules/home";
import { useAppSelector } from "@/store";
import avatar from "@/assets/images/avatar.png";
import { getThemeColor } from "@/utils";
import { BackGroundColor } from "@/enum/theme";
import { useNavigate } from "react-router-dom";
import { routerEnum } from "@/enum/router";

const LayoutHeader: FC = () => {
  const { isCollapsed } = useAppSelector(state => state.home);
  const { Theme, setTheme } = useProThemeContext();
  const dispatch = useAppDispatch();
  const [fullScreen, setFullScreen] = useState<boolean>(
    screenfull.isFullscreen,
  );
  const navigate = useNavigate();

  useEffect(() => {
    screenfull.on("change", () => {
      if (screenfull.isFullscreen) {
        setFullScreen(true);
      } else {
        setFullScreen(false);
      }
      return () => screenfull.off("change", () => {});
    });
  }, []);

  const changeTheme = () => {
    const theme = Theme === "light" ? "dark" : "light";
    setTheme(theme);
    setThemeInfo(theme);
  };

  const handleFullScreen = () => {
    screenfull.toggle();
  };

  const jumpGithub = () => {
    window.open("https://github.com/xun082");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "个人信息",
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "退出系统",
    },
  ];

  const onClick = ({ key }: { key: string }) => {
    if (key === "2") {
      removeLocalStorage(TOKEN_KEY);
      navigate(routerEnum.LOGIN_ROUTER);
    }
  };

  return (
    <Layout.Header
      className={styles.root}
      style={{
        background: getThemeColor(
          Theme,
          BackGroundColor.light,
          BackGroundColor.dark,
        ),
      }}
    >
      <div className={styles["left"]}>
        <div className={styles["logo"]}>
          <img src={logo} alt="logo" className={styles["logo-img"]} />
          <h2 className={styles["logo-text"]}>Moment Admin</h2>
          <Button
            type="text"
            icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => dispatch(CollapsedAction())}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </div>
      </div>
      <div className={styles["right"]}>
        <Badge className={styles["icon"]} size="small" count={5}>
          <MessageOutlined title="消息通知" />
        </Badge>
        <SkinOutlined
          title="换肤"
          className={styles["icon"]}
          onClick={changeTheme}
        />
        {fullScreen ? (
          <FullscreenExitOutlined
            title="缩放"
            className={styles["icon"]}
            onClick={handleFullScreen}
          />
        ) : (
          <FullscreenOutlined
            title="缩放"
            className={styles["icon"]}
            onClick={handleFullScreen}
          />
        )}
        <GithubOutlined
          title="github"
          className={styles["icon"]}
          onClick={jumpGithub}
        />

        <div className={styles["nickname"]}>moment</div>

        <Dropdown
          className="cursor-pointer"
          menu={{ items, onClick }}
          placement="bottom"
          arrow
          trigger={["click"]}
        >
          <img className={styles["avatar"]} src={avatar} alt="" />
        </Dropdown>
      </div>
    </Layout.Header>
  );
};

export default LayoutHeader;
