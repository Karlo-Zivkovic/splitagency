import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `ContentPreview`.
 */
export type ContentPreviewProps =
  SliceComponentProps<Content.ContentPreviewSlice>;

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-2xl text-gray-900 font-medium title-font mb-4 pt-4">
      {children}
    </h3>
  ),
};

/**
 * Component for "ContentPreview" Slices.
 */
const ContentPreview = ({ slice }: ContentPreviewProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <PrismicRichText
                field={slice.primary.title}
                components={components}
              />
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              {slice.primary.content}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {slice.primary.tour.map((item, index) => (
              <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-8 rounded-lg">
                  <PrismicNextImage field={item.img} />
                  <PrismicRichText field={item.title} components={components} />
                  <p className="leading-relaxed text-base">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContentPreview;
