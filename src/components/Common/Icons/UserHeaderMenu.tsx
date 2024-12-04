import { FC } from "react";
import { IIcon } from "./Icon.interfaces";

const SettingsIcon: FC<IIcon> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1465_1094)">
      <path
        d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
        stroke="#C80F0F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9327 10.0001C12.8439 10.2012 12.8175 10.4242 12.8567 10.6405C12.8959 10.8567 12.999 11.0563 13.1527 11.2134L13.1927 11.2534C13.3167 11.3772 13.415 11.5243 13.4821 11.6862C13.5492 11.848 13.5837 12.0215 13.5837 12.1967C13.5837 12.372 13.5492 12.5455 13.4821 12.7073C13.415 12.8692 13.3167 13.0162 13.1927 13.1401C13.0689 13.264 12.9218 13.3624 12.7599 13.4295C12.5981 13.4966 12.4246 13.5311 12.2493 13.5311C12.0741 13.5311 11.9006 13.4966 11.7388 13.4295C11.5769 13.3624 11.4298 13.264 11.306 13.1401L11.266 13.1001C11.1089 12.9464 10.9093 12.8433 10.6931 12.8041C10.4768 12.7649 10.2538 12.7913 10.0527 12.8801C9.8555 12.9646 9.68734 13.1049 9.56889 13.2838C9.45044 13.4626 9.38687 13.6722 9.38602 13.8867V14.0001C9.38602 14.3537 9.24554 14.6928 8.99549 14.9429C8.74544 15.1929 8.4063 15.3334 8.05268 15.3334C7.69906 15.3334 7.35992 15.1929 7.10987 14.9429C6.85982 14.6928 6.71935 14.3537 6.71935 14.0001V13.9401C6.71419 13.7194 6.64276 13.5054 6.51436 13.3259C6.38595 13.1464 6.20651 13.0096 5.99935 12.9334C5.79827 12.8447 5.57522 12.8182 5.35896 12.8574C5.14269 12.8966 4.94313 12.9997 4.78602 13.1534L4.74602 13.1934C4.62218 13.3174 4.47513 13.4157 4.31327 13.4828C4.1514 13.5499 3.9779 13.5845 3.80268 13.5845C3.62746 13.5845 3.45396 13.5499 3.2921 13.4828C3.13023 13.4157 2.98318 13.3174 2.85935 13.1934C2.73538 13.0696 2.63703 12.9225 2.56994 12.7607C2.50284 12.5988 2.4683 12.4253 2.4683 12.2501C2.4683 12.0749 2.50284 11.9014 2.56994 11.7395C2.63703 11.5776 2.73538 11.4306 2.85935 11.3067L2.89935 11.2667C3.05304 11.1096 3.15614 10.9101 3.19535 10.6938C3.23456 10.4775 3.20809 10.2545 3.11935 10.0534C3.03484 9.85623 2.89452 9.68807 2.71566 9.56962C2.5368 9.45117 2.32721 9.3876 2.11268 9.38675H1.99935C1.64573 9.38675 1.30659 9.24627 1.05654 8.99622C0.806491 8.74617 0.666016 8.40704 0.666016 8.05341C0.666016 7.69979 0.806491 7.36065 1.05654 7.11061C1.30659 6.86056 1.64573 6.72008 1.99935 6.72008H2.05935C2.28001 6.71492 2.49402 6.64349 2.67355 6.51509C2.85308 6.38668 2.98983 6.20724 3.06602 6.00008C3.15476 5.799 3.18123 5.57595 3.14202 5.35969C3.10281 5.14343 2.99971 4.94387 2.84602 4.78675L2.80602 4.74675C2.68205 4.62292 2.5837 4.47587 2.5166 4.314C2.4495 4.15214 2.41497 3.97864 2.41497 3.80341C2.41497 3.62819 2.4495 3.45469 2.5166 3.29283C2.5837 3.13096 2.68205 2.98391 2.80602 2.86008C2.92985 2.73611 3.0769 2.63777 3.23876 2.57067C3.40063 2.50357 3.57413 2.46903 3.74935 2.46903C3.92457 2.46903 4.09807 2.50357 4.25994 2.57067C4.4218 2.63777 4.56885 2.73611 4.69268 2.86008L4.73268 2.90008C4.8898 3.05377 5.08936 3.15687 5.30562 3.19608C5.52189 3.2353 5.74494 3.20882 5.94602 3.12008H5.99935C6.19653 3.03557 6.36469 2.89525 6.48314 2.71639C6.60159 2.53753 6.66516 2.32794 6.66602 2.11341V2.00008C6.66602 1.64646 6.80649 1.30732 7.05654 1.05727C7.30659 0.807224 7.64573 0.666748 7.99935 0.666748C8.35297 0.666748 8.69211 0.807224 8.94216 1.05727C9.19221 1.30732 9.33268 1.64646 9.33268 2.00008V2.06008C9.33354 2.27461 9.3971 2.4842 9.51555 2.66306C9.634 2.84192 9.80217 2.98224 9.99935 3.06675C10.2004 3.15549 10.4235 3.18196 10.6397 3.14275C10.856 3.10354 11.0556 3.00044 11.2127 2.84675L11.2527 2.80675C11.3765 2.68278 11.5236 2.58443 11.6854 2.51733C11.8473 2.45024 12.0208 2.4157 12.196 2.4157C12.3712 2.4157 12.5447 2.45024 12.7066 2.51733C12.8685 2.58443 13.0155 2.68278 13.1393 2.80675C13.2633 2.93058 13.3617 3.07763 13.4288 3.23949C13.4959 3.40136 13.5304 3.57486 13.5304 3.75008C13.5304 3.9253 13.4959 4.0988 13.4288 4.26067C13.3617 4.42253 13.2633 4.56958 13.1393 4.69341L13.0993 4.73341C12.9457 4.89053 12.8426 5.09009 12.8033 5.30636C12.7641 5.52262 12.7906 5.74567 12.8793 5.94675V6.00008C12.9639 6.19726 13.1042 6.36543 13.283 6.48388C13.4619 6.60233 13.6715 6.66589 13.886 6.66675H13.9993C14.353 6.66675 14.6921 6.80722 14.9422 7.05727C15.1922 7.30732 15.3327 7.64646 15.3327 8.00008C15.3327 8.3537 15.1922 8.69284 14.9422 8.94289C14.6921 9.19294 14.353 9.33341 13.9993 9.33341H13.9393C13.7248 9.33427 13.5152 9.39784 13.3364 9.51629C13.1575 9.63474 13.0172 9.8029 12.9327 10.0001V10.0001Z"
        stroke="#C80F0F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1465_1094">
        <rect width={width} height={height} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const LogOutIcon: FC<IIcon> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6"
      stroke="#C80F0F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.666 11.3334L13.9993 8.00008L10.666 4.66675"
      stroke="#C80F0F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 8H6"
      stroke="#C80F0F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { SettingsIcon, LogOutIcon };
