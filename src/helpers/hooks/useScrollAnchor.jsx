import React, { useLayoutEffect } from 'react'

function useScrollAnchor() {
  useLayoutEffect(() => {
    const smoothScrollAnchor = document.querySelectorAll("a[href^='#']")

    const clickHandler = (e) => {
      e.preventDefault()

      const href = e.currentTarget.getAttribute('href')
      const targetId = href.replace('#', '')
      const targetEl = document.getElementById(targetId)

      if(targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }

    smoothScrollAnchor.forEach((element) => {
      element.addEventListener('click', clickHandler)
    })

    return () => {}
  })
}

export default useScrollAnchor