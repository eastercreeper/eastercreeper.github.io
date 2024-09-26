import * as React from 'react';

const useEnhancedEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useEventCallback(fn) {
  const ref = React.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return React.useCallback((...args) => (0, ref.current)(...args), []);
}

export { useEventCallback as default };
