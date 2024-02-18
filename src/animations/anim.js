export const headerAnim = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 2, delay: custom * 0.3 + 0.3 },
  }),
};

export const textAnim = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 2, delay: custom * 0.3 + 0.5 },
  }),
};

export const imgAnim = {
  hidden: { opacity: 0, translateX: '-50%' },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 2.5, delay: custom * 0.2 },
    translateX: '-50%',
  }),
};

export const blockTitleAnim = {
  hidden: { y: 50 },
  visible: () => ({
    y: 0,
    transition: { duration: 0.5 },
  }),
};
export const dividerAnim = {
  hidden: { width: '0%' },
  visible: { width: '100%', transition: { duration: 1.5 } },
};

export const cardAnim = {
  hidden: { opacity: 0, y: 200 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: custom * 0.2 },
  }),
};

export const comicsHeaderAnim = {
  hidden: { opacity: 0, y: 100 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: custom * 0.2 },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 1, delay: custom * 0.2 },
  }),
};
