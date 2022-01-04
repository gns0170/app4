import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
interface Props {
  darkMode: boolean,
  color?: string,
}
function HomeBtn({ darkMode,color }: Props) {
  return (
    <Svg width="21" height="18" viewBox="0 0 576 512" fill="none">
        <G clip-path="url(#clip0_1_2)">
        <Path d="M280.37 148.26L96 300.11V464C96 468.243 97.6857 472.313 100.686 475.314C103.687 478.314 107.757 480 112 480L224.06 479.71C228.29 479.689 232.339 477.994 235.322 474.996C238.305 471.997 239.98 467.94 239.98 463.71V368C239.98 363.757 241.666 359.687 244.666 356.686C247.667 353.686 251.737 352 255.98 352H319.98C324.223 352 328.293 353.686 331.294 356.686C334.294 359.687 335.98 363.757 335.98 368V463.64C335.973 465.745 336.382 467.831 337.184 469.778C337.985 471.725 339.162 473.495 340.649 474.986C342.135 476.477 343.901 477.66 345.845 478.467C347.79 479.275 349.875 479.69 351.98 479.69L464 480C468.243 480 472.313 478.314 475.314 475.314C478.314 472.313 480 468.243 480 464V300L295.67 148.26C293.503 146.513 290.803 145.561 288.02 145.561C285.237 145.561 282.537 146.513 280.37 148.26V148.26ZM571.6 251.47L488 182.56V44.05C488 40.8674 486.736 37.8152 484.485 35.5647C482.235 33.3143 479.183 32.05 476 32.05H420C416.817 32.05 413.765 33.3143 411.515 35.5647C409.264 37.8152 408 40.8674 408 44.05V116.66L318.47 43C309.878 35.9298 299.097 32.0641 287.97 32.0641C276.843 32.0641 266.062 35.9298 257.47 43L4.34 251.47C3.12488 252.474 2.11955 253.708 1.38147 255.101C0.643395 256.494 0.187024 258.019 0.0384374 259.589C-0.110149 261.158 0.0519625 262.741 0.515508 264.248C0.979054 265.755 1.73495 267.155 2.74 268.37L28.24 299.37C29.2423 300.589 30.4752 301.598 31.868 302.34C33.2608 303.081 34.7862 303.541 36.3569 303.692C37.9276 303.844 39.5128 303.684 41.0216 303.222C42.5304 302.76 43.9333 302.005 45.15 301L280.37 107.26C282.537 105.513 285.237 104.561 288.02 104.561C290.803 104.561 293.503 105.513 295.67 107.26L530.9 301C532.115 302.005 533.515 302.761 535.022 303.225C536.529 303.688 538.112 303.85 539.682 303.702C541.251 303.553 542.776 303.097 544.169 302.359C545.562 301.62 546.796 300.615 547.8 299.4L573.3 268.4C574.304 267.178 575.057 265.771 575.515 264.257C575.973 262.744 576.127 261.155 575.969 259.582C575.811 258.008 575.344 256.482 574.594 255.09C573.844 253.698 572.827 252.468 571.6 251.47V251.47Z" fill={color||"black"}/>
        </G>
    </Svg>
  )
}

export default HomeBtn;