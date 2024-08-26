import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      {children}
    </h1>
  ),
};

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
          <p className="mb-8 leading-relaxed">{slice.primary.content}</p>
          {slice.variation === "default" && (
            <div className="flex justify-center">
              <PrismicNextLink
                field={slice.primary.button}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Find your trip!
              </PrismicNextLink>
            </div>
          )}
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <PrismicNextImage
            field={slice.primary.heroimage}
            className="object-cover object-center rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
