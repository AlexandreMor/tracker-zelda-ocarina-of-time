import React from "react";
import { useSelector } from "react-redux";
import { selectSettings } from "../../utils/selectors";
import Setting from "./Setting";

export default function Settings() {
  const settings = useSelector(selectSettings);
  console.log(settings)
  const settingsDisplay = settings.map((setting) => {
    return <Setting key={setting.name} setting={setting} />;
  });
  return (
    <div className="settings">
      <h1>Settings</h1>
      {settingsDisplay}
    </div>
  );
}
