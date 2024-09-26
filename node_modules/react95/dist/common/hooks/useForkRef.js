'use strict';

var React = require('react');

function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
function useForkRef(refA, refB) {
  return React.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return (refValue) => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

module.exports = useForkRef;
