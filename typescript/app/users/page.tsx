import React from "react";

type TYPEInterface = {
  Fname: string;
};

export default function Users(props: { Fname: string; Sname: string }) {
  return (
    <div>
      page {props.Fname}-{props.Sname}
    </div>
  );
}
