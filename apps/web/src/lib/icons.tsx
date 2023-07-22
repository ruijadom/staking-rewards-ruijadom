interface IconProps {
  props?: React.SVGProps<SVGAElement>;
}

export const PencilIcon = ({ ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9.59"
    height="9.59"
    viewBox="0 0 9.59 9.59"
    fill="none"
    {...props}
  >
    <rect
      x="0.353553"
      y="7.7605"
      width="10.475"
      height="2.08235"
      rx="1.04118"
      transform="rotate(-45 0.353553 7.7605)"
      stroke="#333030"
      strokeWidth="0.5"
    />
    <rect
      x="0.353553"
      y="7.7605"
      width="2.40463"
      height="2.08235"
      rx="1.04118"
      transform="rotate(-45 0.353553 7.7605)"
      fill="#D9D9D9"
      stroke="#333030"
      strokeWidth="0.5"
    />
  </svg>
);

export const SearchIcon = ({ ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    {...props}
  >
    <path
      opacity="0.3"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5519 0.0016252C4.82935 0.00487561 4.97674 0.010293 5.06128 0.0232946C5.12739 0.0319623 5.22926 0.0482144 5.28887 0.0579656C5.34848 0.0677168 5.46119 0.0904696 5.53814 0.107805C5.61509 0.125141 5.74948 0.160895 5.83618 0.186898C5.92288 0.212902 6.06161 0.259491 6.14506 0.289828C6.22851 0.321249 6.40409 0.399258 6.53522 0.464266C6.66636 0.529275 6.84193 0.625703 6.92539 0.67771C7.00884 0.729716 7.12805 0.809893 7.19091 0.855399C7.25377 0.901988 7.36757 0.991916 7.4456 1.05584C7.52255 1.12085 7.64935 1.23678 7.72739 1.31479C7.80542 1.3928 7.91271 1.50656 7.9669 1.5694C8.02001 1.63225 8.10129 1.73193 8.14573 1.79152C8.19125 1.85111 8.26928 1.9627 8.32022 2.04071C8.37115 2.11872 8.44377 2.23465 8.4817 2.30075C8.51855 2.36684 8.58249 2.48819 8.62259 2.57161C8.66161 2.65504 8.71688 2.78181 8.74506 2.85332C8.77324 2.92482 8.81767 3.04726 8.84369 3.12418C8.86861 3.20111 8.90763 3.33546 8.92822 3.42214C8.9499 3.50881 8.97916 3.64533 8.99433 3.72551C9.00842 3.80568 9.02901 3.94545 9.03985 4.0343C9.05611 4.16106 9.06044 4.27266 9.05936 4.53811C9.05936 4.79056 9.05394 4.91732 9.04093 5.02567C9.0301 5.10585 9.01167 5.23261 8.99975 5.30737C8.98674 5.38213 8.95531 5.5284 8.9293 5.63241C8.90329 5.73643 8.85777 5.8957 8.82743 5.98454C8.79708 6.07447 8.74723 6.20557 8.71688 6.27708C8.68762 6.34859 8.62801 6.47752 8.58466 6.5642C8.54131 6.65087 8.46869 6.78522 8.42209 6.86215C8.37549 6.93908 8.30613 7.04634 8.26928 7.10051C8.23243 7.15469 8.16415 7.24678 8.0341 7.41472L9.12547 8.50144L9.17424 8.46243C9.20133 8.44185 9.24685 8.41368 9.2772 8.39959C9.30646 8.38551 9.36065 8.37034 9.39642 8.36492C9.43326 8.3595 9.49396 8.3595 9.53731 8.36492C9.58174 8.37142 9.64243 8.38876 9.68362 8.40826C9.74973 8.4386 9.86028 8.54694 13 11.6836V11.8136L11.8133 13H11.5857L9.98058 11.3943C8.45677 9.86878 8.37441 9.78426 8.34406 9.71709C8.3148 9.65208 8.31263 9.63583 8.31263 9.52207C8.31263 9.40288 8.3148 9.39313 8.34731 9.32704C8.36682 9.28804 8.39608 9.23928 8.44702 9.18077L7.35131 8.08647L7.21476 8.18832C7.13889 8.24357 7.01642 8.327 6.94164 8.37359C6.86686 8.41909 6.7574 8.4841 6.69779 8.51552C6.63818 8.54803 6.52547 8.60437 6.44852 8.64121C6.37157 8.67696 6.24368 8.73113 6.16674 8.76147C6.08979 8.79072 5.96949 8.83298 5.90121 8.85573C5.83293 8.8774 5.70071 8.91424 5.60859 8.93699C5.51647 8.95975 5.37991 8.98792 5.30513 9.00092C5.23035 9.01284 5.10571 9.03125 5.02876 9.03992C4.95181 9.04967 4.77516 9.06051 4.6386 9.06376C4.4847 9.06701 4.3243 9.06484 4.22134 9.05726C4.12922 9.04967 3.98291 9.0345 3.89621 9.02259C3.8095 9.01067 3.68053 8.989 3.609 8.97383C3.53747 8.95866 3.43235 8.93483 3.37599 8.91966C3.31963 8.90449 3.22643 8.8774 3.17007 8.86007C3.11371 8.84273 3.00642 8.80589 2.93164 8.77772C2.85686 8.75064 2.72247 8.6943 2.6336 8.65312C2.54364 8.61304 2.41251 8.54694 2.34098 8.50686C2.26945 8.46785 2.14048 8.38876 2.05377 8.33242C1.96707 8.27608 1.84785 8.19265 1.78825 8.14714C1.72864 8.10272 1.62893 8.02146 1.56607 7.96837C1.50321 7.9142 1.38833 7.80693 1.31138 7.72892C1.23335 7.65091 1.11738 7.52415 1.05236 7.44722C0.988412 7.36921 0.898458 7.25545 0.851855 7.19261C0.806336 7.12977 0.72722 7.01058 0.674114 6.92716C0.622093 6.84373 0.538641 6.6953 0.488787 6.5967C0.438933 6.4981 0.372822 6.35942 0.34356 6.28791C0.313214 6.2164 0.26336 6.08422 0.233014 5.99537C0.202668 5.90545 0.158233 5.75918 0.135473 5.67033C0.112714 5.58041 0.0812839 5.44172 0.0671947 5.36155C0.0520217 5.28137 0.030346 5.14702 0.0195081 5.06359C0.00433514 4.94116 0 4.83823 0 4.53269C0 4.22824 0.00433514 4.12314 0.0195081 4.00179C0.030346 3.91837 0.0520217 3.78401 0.0661109 3.70384C0.0812839 3.62366 0.105127 3.50881 0.1203 3.44922C0.135473 3.38963 0.166903 3.27478 0.190746 3.19461C0.215673 3.11443 0.261192 2.98225 0.292622 2.90207C0.324052 2.82189 0.37499 2.69946 0.405336 2.6312C0.436765 2.56295 0.494206 2.4481 0.533222 2.37659C0.572238 2.30508 0.636182 2.19565 0.675198 2.13281C0.714214 2.06997 0.787912 1.96054 0.83885 1.88903C0.889787 1.81752 0.979742 1.7005 1.03935 1.629C1.09896 1.55749 1.22576 1.42097 1.32113 1.32454C1.41759 1.2292 1.55198 1.1046 1.62026 1.04717C1.68854 0.990832 1.78174 0.917156 1.82618 0.884652C1.87061 0.852148 1.96057 0.789307 2.02668 0.744885C2.0917 0.701546 2.199 0.634371 2.26511 0.597533C2.33014 0.559612 2.45261 0.494604 2.53606 0.454515C2.61951 0.413343 2.7604 0.350502 2.85035 0.314748C2.93922 0.278993 3.07578 0.230237 3.15381 0.205317C3.23076 0.181481 3.35323 0.14681 3.42476 0.129475C3.49629 0.111056 3.62093 0.0850523 3.70113 0.0698837C3.78133 0.0557986 3.91571 0.0352127 3.99917 0.0254615C4.08262 0.0157103 4.15306 0.00487561 4.15632 0.0016252C4.15848 -0.000541734 4.33731 -0.000541734 4.5519 0.0016252ZM4.06961 0.979998C3.99483 0.988665 3.86586 1.01033 3.78241 1.02767C3.69896 1.04609 3.56457 1.07968 3.48437 1.1046C3.40417 1.12843 3.27953 1.17177 3.208 1.19994C3.13647 1.2292 3.00967 1.28662 2.92622 1.32779C2.84277 1.37005 2.72789 1.4318 2.67153 1.46648C2.61517 1.50006 2.5198 1.5629 2.46019 1.60516C2.40058 1.64741 2.29546 1.72976 2.22718 1.78718C2.1589 1.84461 2.0386 1.95729 1.96057 2.03638C1.88362 2.11656 1.78283 2.22815 1.73731 2.28449C1.69287 2.34083 1.62676 2.4286 1.591 2.47952C1.55523 2.53044 1.49562 2.62254 1.45769 2.68538C1.41976 2.74822 1.35907 2.85982 1.32113 2.93458C1.28429 3.00933 1.22901 3.13177 1.19867 3.20869C1.16832 3.28454 1.12388 3.4113 1.10004 3.48931C1.0762 3.5684 1.03935 3.71576 1.01876 3.8176C0.998166 3.91945 0.975406 4.05272 0.96782 4.11556C0.95915 4.18707 0.953731 4.34742 0.954814 4.54894C0.954814 4.82306 0.958066 4.89132 0.979742 5.02567C0.992747 5.11235 1.01551 5.23911 1.03176 5.30737C1.04694 5.37563 1.07403 5.48289 1.09137 5.54574C1.1098 5.60858 1.14664 5.71801 1.17266 5.78952C1.19975 5.86102 1.26153 6.00188 1.31138 6.10372C1.36015 6.20557 1.43927 6.34859 1.48587 6.42334C1.53356 6.4981 1.61376 6.61512 1.66578 6.68338C1.71672 6.75164 1.80775 6.86215 1.86628 6.92716C1.92589 6.99217 2.01476 7.08534 2.06569 7.13193C2.11555 7.17852 2.2055 7.25762 2.26511 7.30637C2.32472 7.35404 2.40709 7.41905 2.44935 7.44831C2.49054 7.47864 2.57616 7.53498 2.63902 7.57291C2.70188 7.61191 2.794 7.66717 2.84494 7.69425C2.89587 7.72134 2.99341 7.76901 3.06169 7.79935C3.12997 7.82969 3.24702 7.87736 3.3218 7.90445C3.39658 7.93153 3.52989 7.97162 3.61984 7.99437C3.70871 8.01713 3.83877 8.04638 3.90704 8.0583C3.97532 8.07022 4.08479 8.08647 4.1509 8.09405C4.22243 8.10272 4.37957 8.10814 4.54106 8.10706C4.72855 8.10706 4.85536 8.10055 4.9529 8.08755C5.02985 8.0778 5.16424 8.05505 5.25094 8.03771C5.33764 8.02038 5.47203 7.98679 5.54898 7.96404C5.62593 7.9402 5.73864 7.90336 5.79825 7.88061C5.85786 7.85894 5.98249 7.80477 6.07461 7.75926C6.16674 7.71484 6.30113 7.64333 6.37266 7.60108C6.44419 7.55774 6.55907 7.48189 6.62734 7.43205C6.69562 7.38222 6.79316 7.30637 6.8441 7.26412C6.89396 7.22186 6.98933 7.13302 7.05544 7.06801C7.12047 7.003 7.2115 6.90549 7.25702 6.85132C7.30146 6.79714 7.36974 6.71263 7.40767 6.66171C7.44669 6.61079 7.51605 6.50894 7.56265 6.43418C7.60925 6.35942 7.68078 6.23265 7.72197 6.15248C7.76207 6.0723 7.81734 5.95204 7.84444 5.88703C7.87153 5.82202 7.91271 5.70717 7.93656 5.63241C7.9604 5.55765 7.99075 5.45797 8.00267 5.4103C8.01459 5.36263 8.03627 5.25753 8.05144 5.17736C8.06553 5.09718 8.08395 4.978 8.09154 4.91191C8.10021 4.84365 8.10671 4.68113 8.10563 4.53269C8.10563 4.38967 8.10021 4.21957 8.09262 4.15348C8.08395 4.08739 8.06878 3.98121 8.05686 3.91511C8.04602 3.84902 8.02218 3.73743 8.00484 3.66592C7.98749 3.59441 7.95065 3.46981 7.92464 3.38963C7.89754 3.30946 7.84769 3.17944 7.81409 3.10251C7.78049 3.02559 7.72847 2.91507 7.69812 2.85873C7.66778 2.80239 7.61142 2.70488 7.57241 2.64204C7.53339 2.5792 7.46294 2.47518 7.41417 2.40909C7.3654 2.343 7.28087 2.23899 7.22668 2.17615C7.17249 2.11331 7.08253 2.01796 7.02726 1.96487C6.9709 1.9107 6.88854 1.83594 6.8441 1.79802C6.79967 1.75901 6.71947 1.69509 6.66528 1.655C6.61109 1.61491 6.50379 1.54232 6.42684 1.49356C6.34881 1.44481 6.20792 1.3668 6.11255 1.31912C6.01717 1.27253 5.8752 1.21078 5.79825 1.18152C5.72022 1.15227 5.62268 1.11868 5.58149 1.10568C5.53922 1.09376 5.45686 1.07101 5.39725 1.05584C5.33764 1.04067 5.23251 1.019 5.16424 1.006C5.09596 0.994083 4.97132 0.976747 4.88787 0.968079C4.79683 0.958328 4.64727 0.952911 4.51396 0.953994C4.3915 0.955078 4.27228 0.957245 4.24844 0.959412C4.22459 0.961579 4.14439 0.970246 4.06961 0.979998Z"
      fill="black"
    />
  </svg>
);
