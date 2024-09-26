import { useState, useCallback } from 'react';

function useControlledOrUncontrolled({ defaultValue, onChange, onChangePropName = "onChange", readOnly, value, valuePropName = "value" }) {
  const isControlled = value !== void 0;
  const [controlledValue, setControlledValue] = useState(defaultValue);
  const handleChangeIfUncontrolled = useCallback((newValue) => {
    if (!isControlled) {
      setControlledValue(newValue);
    }
  }, [isControlled]);
  if (isControlled && typeof onChange !== "function" && !readOnly) {
    const message = `Warning: You provided a \`${valuePropName}\` prop to a component without an \`${onChangePropName}\` handler.${valuePropName === "value" ? `This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${onChangePropName}\` or \`readOnly\`.` : `This breaks the component state. You must provide an \`${onChangePropName}\` function that updates \`${valuePropName}\`.`}`;
    console.warn(message);
  }
  return [isControlled ? value : controlledValue, handleChangeIfUncontrolled];
}

export { useControlledOrUncontrolled as default };
