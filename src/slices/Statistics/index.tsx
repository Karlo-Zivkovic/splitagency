import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `Statistics`.
 */
export type StatisticsProps = SliceComponentProps<Content.StatisticsSlice>;

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
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
 * Component for "Statistics" Slices.
 */
const Statistics = ({ slice }: StatisticsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <PrismicRichText
              field={slice.primary.title}
              components={components}
            />
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {slice.primary.content}
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            {slice.primary.stats.map((item, index) => (
              <div key={index} className="p-5 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-3 border-gray-200 px-4 py-6 rounded-lg">
                  <PrismicNextImage
                    field={item.icon}
                    className="text-indigo-501 w-12 h-12 mb-3 inline-block"
                  />
                  <PrismicRichText
                    field={item.number}
                    components={components}
                  />
                  <p className="leading-relaxed">{item.stat_content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Statistics;
