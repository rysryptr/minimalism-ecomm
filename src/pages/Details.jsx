import Header from "../components/parts/Header";
import Clients from "../components/parts/Clients";
import Sitemap from "../components/parts/Sitemap";
import Footer from "../components/parts/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ProductDetails from "../components/parts/Details/ProductDetails";
import Suggestions from "../components/parts/Details/Suggestions";
import DocumentWrapper from "../components/parts/DocumentWrapper";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAsync from "../helpers/hooks/useAsync";
import fetchData from "../helpers/fetch/fetch";
import NotFound from "../components/parts/NotFound/NotFound";

function LoadingProductDetail() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full md:hidden px-4">
          <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-4 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
        <div className="flex-1">
          <div className="slider">
            <div className="thumbnail">
              {Array(5)
                .fill()
                .map((_, index) => {
                  return (
                    <div className="px-2" key={index}>
                      <div className="item rounded-xl bg-gray-300 animate-pulse"></div>
                    </div>
                  );
                })}
            </div>
            <div className="preview">
              <div className="item rounded-lg w-full h-full overflow-hidden">
                <div className="item bg-gray-300 animate-pulse rounded-lg w-full h-full overflow-hidden"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 md:p-6">
          <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>

          <div className="w-40 h-12 mt-4 bg-gray-300 animate-pulse rounded-full"></div>

          <hr className="my-8" />

          <div className="w-full h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-full h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-full h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-80 h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>

          <div className="w-full h-4 mt-8 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-full h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-full h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-80 h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

function LoadingSuggestion() {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Complete your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex overflow-x-auto mb-4 -mx-3 pb-2">
          {Array(4)
            .fill()
            .map((_, index) => {
              return (
                <div
                  className="px-3 flex-none"
                  style={{ width: 320 }}
                  key={index}
                >
                  <div className="rounded-xl p-4 pb-8 relative bg-white">
                    <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                      <div
                        className="bg-gray-300 animate-pulse rounded-lg w-full h-full overflow-hidden"
                        style={{ width: 287, height: 150 }}
                      ></div>
                    </div>
                    <div className="w-56 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-40 h-4 mt-3 bg-gray-300 animate-pulse rounded-full"></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default function Details() {
  const { idp } = useParams();

  const { data, isLoading, isError, error, run } = useAsync();

  useEffect(() => {
    run(fetchData({ url: `/products/${idp}` }));
  }, [run, idp]);

  return (
    <DocumentWrapper>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/123/", name: "Living Room" },
          { url: "/categories/123/products/321", name: "Details" },
        ]}
      />
      {isError ? (
        <NotFound />
      ) : (
        <>
          {isLoading ? (
            <LoadingProductDetail />
          ) : (
            <ProductDetails data={data} />
          )}
          {isLoading ? (
            <LoadingSuggestion />
          ) : (
            <Suggestions data={data.relatedProducts} />
          )}

          <Clients />
          <Sitemap />
          <Footer />
        </>
      )}
    </DocumentWrapper>
  );
}
