import React from "react";
import NotFound from "../components/parts/NotFound/NotFound";
import Header from "../components/parts/Header";
import Footer from "../components/parts/Footer";
import DocumentWrapper from "../components/parts/DocumentWrapper";

function NotFoundPage() {
  return (
    <DocumentWrapper>
      <Header theme="black" />
      <NotFound />
      <Footer />
    </DocumentWrapper>
  );
}

export default NotFoundPage;
