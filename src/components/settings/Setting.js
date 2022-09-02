import React from "react";
import RadioButton from "./RadioButton";
import RadioButtonNoChecked from "./RadioButtonNoChecked";
import { useDispatch } from "react-redux";
import { setSetting } from "../../features/settings";
import useChecksVisibility from "../../logic/useChecksVisibility";

function Setting({ setting }) {
  const dispatch = useDispatch();
  useChecksVisibility();
  const handleChange = (e) => {
    dispatch(setSetting(setting.id, e.target.value));
  };
  const inputRadio = setting.datasComponent.map((data) => {
    return (
      <div key={data.id} onChange={(e) => handleChange(e)}>
        {data.inputValue === setting.value ? (
          <RadioButton data={data} name={setting.name} settingId={setting.id} />
        ) : (
          <RadioButtonNoChecked
            data={data}
            name={setting.name}
            settingId={setting.id}
          />
        )}
        {data.name}
      </div>
    );
  });
  return (
    <fieldset>
      <legend>{setting.name}:</legend>
      {inputRadio}
    </fieldset>
  );
}

export default Setting;
