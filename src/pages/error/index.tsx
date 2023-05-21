import React, { FC, ReactNode } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { routerEnum } from "@/enum/router";

interface PropsType {
  code: "success" | "error" | "info" | "warning" | 404 | 403 | 500;
  title: ReactNode;
  subTitle: ReactNode;
}

const NotFound: FC<PropsType> = props => {
  const { code, subTitle } = props;
  const navigate = useNavigate();
  const goHome = () => {
    navigate(routerEnum.HOME_ROUTER);
  };

  return (
    <Result
      status={code}
      title={code}
      subTitle={subTitle}
      extra={
        <Button type="primary" onClick={goHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
