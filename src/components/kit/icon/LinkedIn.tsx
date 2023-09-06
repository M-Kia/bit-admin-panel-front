import { JSX } from "react";

import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export default function LinkedIn(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="#003681"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.7356 12.7143H10.363V9.0023C10.363 8.11659 10.3482 6.9783 9.13046 6.9783C7.89617 6.9783 7.7076 7.94287 7.7076 8.9383V12.7143H5.33732V5.08001H7.6116V6.12401H7.64475C7.96075 5.52401 8.73503 4.89087 9.88932 4.89087C12.2916 4.89087 12.735 6.47144 12.735 8.52744V12.7143H12.7356ZM2.66246 4.03773C2.48164 4.03788 2.30257 4.00238 2.13549 3.93325C1.96841 3.86412 1.8166 3.76273 1.68874 3.63488C1.56089 3.50702 1.45949 3.35521 1.39037 3.18813C1.32124 3.02104 1.28574 2.84197 1.28589 2.66116C1.28589 2.38906 1.36656 2.12307 1.51771 1.89681C1.66885 1.67055 1.88369 1.49419 2.13505 1.39001C2.38642 1.28583 2.66303 1.25851 2.92991 1.31151C3.1968 1.36451 3.44198 1.49545 3.63446 1.68777C3.82695 1.8801 3.95809 2.12517 4.01131 2.39201C4.06453 2.65885 4.03745 2.93549 3.93347 3.18694C3.8295 3.43839 3.65332 3.65337 3.42718 3.8047C3.20105 3.95604 2.93513 4.03693 2.66303 4.03716L2.66246 4.03773ZM3.84932 12.7143H1.47446V5.08001H3.84932V12.7143Z"
        fill="inherit"
      />
    </SvgIcon>
  );
}
