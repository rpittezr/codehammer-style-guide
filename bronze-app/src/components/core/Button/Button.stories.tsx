/** Buttons are used for actions, like in forms, while textual hyperlinks are used for destinations, or moving from one page to another. */
export default {
  title: "Components/Button",
  parameters: {
    StoryType: "banner",
    controls: {
      hideNoControlsWarning: true,
    },
  },
  tags: ["autodocs"],
};

/** Test */
export const Default = () => {
  return (
    <>
      <div>
        <button
          className="btn | text-neutral-800 shadow-[0_4px_9px_-4px_#262626] bg-neutral-50 | hover:bg-neutral-100 focus:outline-none focus:ring-2 active:bg-neutral-100 active:shadow-[0_8px_9px_-5px_#262626]"
          type="button"
        >
          Button
        </button>
      </div>
    </>
  );
};

export const Hierarchy = () => {
  return (
    <>
      <div className="inline-flex gap-4">
        <button
          className="btn | text-white  shadow-[0_4px_9px_-4px_#2563eb] bg-blue-600 | hover:bg-blue-700 hover:shadow-[0_8px_16px_-4px_#60a5fa] focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 active:bg-blue-700 active:shadow-[0_8px_9px_-5px_#2563eb]"
          type="button"
        >
          Primary
        </button>
        <button
          className="btn | text-blue-800  shadow-[0_1px_9px_-4px_#2563eb] bg-blue-100 | hover:bg-blue-200 hover:shadow-[0_2px_9px_-4px_#60a5fa] focus:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:bg-blue-200 active:shadow-[0_4px_9px_-5px_#2563eb]"
          type="button"
        >
          Secondary
        </button>
      </div>
    </>
  );
};

export const Contextual = () => {
  return (
    <>
      <div className="inline-flex gap-4">
        <button
          className="btn | text-white  shadow-[0_4px_9px_-4px_#2563eb] bg-green-600 | hover:bg-green-700 hover:shadow-[0_8px_16px_-4px_#60a5fa] focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 active:bg-blue-700 active:shadow-[0_8px_9px_-5px_#2563eb]"
          type="button"
        >
          Success
        </button>
        <button
          className="btn | text-white  shadow-[0_4px_9px_-4px_#2563eb] bg-rose-600 | hover:bg-rose-700 hover:shadow-[0_8px_16px_-4px_#60a5fa] focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 active:bg-blue-700 active:shadow-[0_8px_9px_-5px_#2563eb]"
          type="button"
        >
          Danger
        </button>
        <button
          className="btn | text-white  shadow-[0_4px_9px_-4px_#2563eb] bg-yellow-500 | hover:bg-yellow-600 hover:shadow-[0_8px_16px_-4px_#60a5fa] focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 active:bg-blue-700 active:shadow-[0_8px_9px_-5px_#2563eb]"
          type="button"
        >
          Warning
        </button>
        <button
          className="btn | text-white  shadow-[0_4px_9px_-4px_#2563eb] bg-violet-500 | hover:bg-violet-600 hover:shadow-[0_8px_16px_-4px_#60a5fa] focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 active:bg-blue-700 active:shadow-[0_8px_9px_-5px_#2563eb]"
          type="button"
        >
          Info
        </button>
      </div>
    </>
  );
};
