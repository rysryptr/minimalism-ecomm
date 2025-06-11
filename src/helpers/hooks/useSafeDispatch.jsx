import { useRef, useLayoutEffect, useCallback } from 'react'

export default function useSafeDispatch(dispatch) {
  const mount = useRef(false)

  useLayoutEffect(() => {
    mount.current = true
    return () => {
      mount.current = false
    };
  }, [])

  return useCallback(
    (...args) => (mount.current ? dispatch(...args) : void 0),
    [dispatch]
  )
}
