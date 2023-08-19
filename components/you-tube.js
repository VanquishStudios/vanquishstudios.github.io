import React from 'react'

import PropTypes from 'prop-types'

const YouTube = (props) => {
  return (
    <>
      <div className={`you-tube-you-tube ${props.rootClassName} `}>
        <img
          alt={props.pastedImage_alt}
          src={props.pastedImage_src}
          className="you-tube-pasted-image"
        />
      </div>
      <style jsx>
        {`
          .you-tube-you-tube {
            width: 240px;
            height: 120px;
            display: flex;
            align-items: center;
            border-radius: 200px;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .you-tube-pasted-image {
            width: 120px;
          }
          @media (max-width: 479px) {
            .you-tube-you-tube {
              width: 120px;
              height: 60px;
              align-items: center;
            }
            .you-tube-pasted-image {
              width: 80px;
            }
          }
        `}
      </style>
    </>
  )
}

YouTube.defaultProps = {
  pastedImage_src: '/logos/pastedimage-smjb.svg',
  pastedImage_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fcfef315-3a43-4c65-896c-420586c2dc78/5820203a-2e65-4a3e-a151-be96d1461d92?org_if_sml=169085',
  rootClassName: '',
  pastedImage_alt: 'pastedImage',
  pastedImage_alt1: 'pastedImage',
}

YouTube.propTypes = {
  pastedImage_src: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
}

export default YouTube
