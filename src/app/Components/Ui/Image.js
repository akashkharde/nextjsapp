import React, { forwardRef } from 'react';

const Image = forwardRef((props, ref) => {
  const { metadata, alt, isAboveTheFold = false, ...restProps } = props;

  return (
    <img
      src={metadata.src}
      width={metadata.width}
      height={metadata.height}
      alt={alt}
      loading={isAboveTheFold ? 'eager' : 'lazy'}
      decoding="async"
      ref={ref}
      {...restProps}
    />
  );
});

Image.displayName = 'Image';

export default Image;
