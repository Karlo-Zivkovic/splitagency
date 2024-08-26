import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `TourTypes`.
 */
export type TourTypesProps = SliceComponentProps<Content.TourTypesSlice>;

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="title-font font-medium text-3xl text-gray-900">
      {children}
    </h3>
  ),
};
/**
 * Component for "TourTypes" Slices.
 */
const TourTypes = ({ slice }: TourTypesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {slice.primary.category.map((item, index) => (
              <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700 text-xl">
                    <PrismicRichText field={item.categoryname} />
                  </span>
                </div>
                <div className="md:flex-grow">
                  <PrismicRichText field={item.title} />
                  <p className="leading-relaxed">{item.content}</p>
                  <div className="text-indigo-500 inline-flex items-center mt-4">
                    <PrismicNextLink field={item.link}>
                      See more
                    </PrismicNextLink>
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default TourTypes;
