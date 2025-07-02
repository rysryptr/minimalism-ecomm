import React from "react";
import useScrollAnchor from "../../helpers/hooks/useScrollAnchor";
import useScrollToTop from "../../helpers/hooks/useScrollToTop";
import useModalDOM from "../../helpers/hooks/useModalDOM";

export default function DocumentWrapper({ children }) {
  useScrollAnchor();
  useScrollToTop();
  useModalDOM();
  return children;
}
