import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="text-3xl font-medium title-font mb-4 text-gray-900 tracking-widest">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-2xl font-medium text-gray-900">{children}</h3>
  ),
};

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="text-gray-600 body-font bg-[#c8e7ca]">
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
          <div className="flex flex-wrap -m-4">
            {slice.primary.member.map((item, index) => (
              // Render the item
              <div key={index} className="p-5 lg:w-1/2">
                <div className="h-full p-8 rounded bg-white flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <PrismicNextImage
                    field={item.profile}
                    className="flex-shrink-1 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  />
                  <div className="flex-grow sm:pl-9">
                    <PrismicRichText
                      field={item.name}
                      components={components}
                    />
                    <h2 className="text-gray-500 mb-3">{item.category}</h2>
                    <p className="mb-5">{item.content}</p>
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

export default Team;
