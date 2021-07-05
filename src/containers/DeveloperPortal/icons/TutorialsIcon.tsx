import React, {FC} from 'react';

const TutorialsIcon: FC<{size?: number}> = ({size = 40}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="tutorials-path-1-outside-1"
        maskUnits="userSpaceOnUse"
        x="23.4326"
        y="-0.567627"
        width="17"
        height="17"
        fill="black"
      >
        <rect fill="white" x="23.4326" y="-0.567627" width="17" height="17" />
        <path d="M32.9256 15.5675H31.0748C30.9758 15.5668 30.8799 15.5324 30.803 15.47C30.7261 15.4076 30.6727 15.3209 30.6516 15.2242L30.4512 14.2237C29.833 14.0698 29.2413 13.824 28.696 13.4946L27.8475 14.0588C27.765 14.1139 27.666 14.1389 27.5672 14.1297C27.4684 14.1205 27.3758 14.0776 27.3048 14.0082L25.9963 12.6977C25.9257 12.6262 25.8822 12.5324 25.873 12.4324C25.8639 12.3323 25.8897 12.2322 25.9461 12.1491L26.5083 11.3059C26.1782 10.7605 25.9326 10.1683 25.7799 9.54935L24.7786 9.34913C24.6813 9.32838 24.594 9.27508 24.5311 9.19803C24.4682 9.12099 24.4335 9.0248 24.4326 8.92534V7.07453C24.4333 6.97551 24.4677 6.87967 24.5301 6.80278C24.5925 6.72588 24.6792 6.6725 24.776 6.6514L25.7783 6.45032C25.9311 5.83151 26.1767 5.23937 26.5066 4.69399L25.9414 3.84859C25.8861 3.76602 25.861 3.66695 25.8702 3.56804C25.8794 3.46912 25.9224 3.3764 25.992 3.30545L27.3025 1.99518C27.3738 1.92451 27.4675 1.88079 27.5675 1.87148C27.6675 1.86218 27.7676 1.88786 27.8508 1.94416L28.694 2.5074C29.2398 2.17744 29.8319 1.93131 30.4508 1.77724L30.651 0.778319C30.6717 0.681051 30.725 0.593767 30.8021 0.530872C30.8791 0.467978 30.9753 0.433233 31.0748 0.432373H32.9256C33.0246 0.433093 33.1205 0.467476 33.1973 0.529874C33.2742 0.592271 33.3276 0.67897 33.3487 0.775724L33.5492 1.77616C34.169 1.92958 34.7621 2.1759 35.3083 2.50675L36.1515 1.94135C36.2341 1.88611 36.3332 1.86099 36.4321 1.8702C36.531 1.87941 36.6237 1.9224 36.6947 1.99194L38.0052 3.30221C38.0761 3.37344 38.1199 3.46714 38.1292 3.5672C38.1385 3.66726 38.1127 3.76745 38.0562 3.85053L37.494 4.69572C37.8235 5.24094 38.0693 5.83254 38.2231 6.45075L39.2201 6.65075C39.3177 6.67116 39.4053 6.72431 39.4686 6.80139C39.5318 6.87846 39.5668 6.97484 39.5678 7.07453V8.92534C39.567 9.02437 39.5326 9.1202 39.4703 9.1971C39.4079 9.274 39.3212 9.32738 39.2244 9.34848L38.224 9.54913C38.0702 10.1673 37.8244 10.7589 37.4949 11.3042L38.0592 12.1526C38.1143 12.2351 38.1393 12.3341 38.1301 12.433C38.1208 12.5318 38.0779 12.6244 38.0084 12.6953L36.6979 14.0058C36.6265 14.0764 36.5329 14.1201 36.4329 14.1294C36.3329 14.1387 36.2328 14.1131 36.1496 14.0568L35.3063 13.4931C34.7605 13.8239 34.1678 14.0702 33.5483 14.2237L33.3494 15.2216C33.3286 15.3188 33.2753 15.4061 33.1983 15.469C33.1212 15.5319 33.025 15.5666 32.9256 15.5675ZM28.6921 13.0211C28.7325 13.021 28.7722 13.0324 28.8065 13.054C29.3829 13.4201 30.0181 13.6841 30.6843 13.8343C30.7251 13.8435 30.7623 13.8644 30.7914 13.8943C30.8206 13.9242 30.8405 13.962 30.8486 14.003L31.075 15.1351H32.9236L33.1524 14.003C33.1606 13.962 33.1805 13.9242 33.2097 13.8943C33.2389 13.8643 33.2761 13.8435 33.3169 13.8343C33.9831 13.6849 34.6183 13.4209 35.1941 13.0542C35.23 13.0323 35.2714 13.0209 35.3135 13.0214C35.3555 13.0219 35.3966 13.0343 35.432 13.057L36.3918 13.6992L37.6994 12.3919L37.0689 11.446C37.0608 11.4361 37.0536 11.4256 37.0473 11.4144C37.0285 11.3806 37.0191 11.3424 37.0201 11.3037C37.0211 11.265 37.0324 11.2273 37.0529 11.1945C37.4192 10.6182 37.6832 9.98289 37.8333 9.3167C37.8425 9.27594 37.8633 9.23873 37.8933 9.20956C37.9232 9.1804 37.9609 9.16053 38.0019 9.15237L39.1353 8.92513V7.07453L38.0032 6.84751C37.9622 6.83934 37.9245 6.81948 37.8946 6.79032C37.8646 6.76115 37.8438 6.72394 37.8346 6.68318C37.6845 6.01699 37.4205 5.38172 37.0542 4.80535C37.0335 4.77265 37.022 4.73499 37.0208 4.69632C37.0197 4.65764 37.0289 4.61935 37.0475 4.58545C37.0551 4.57165 37.0641 4.55874 37.0746 4.54697L37.699 3.60794L36.392 2.29983L35.4328 2.94286C35.3975 2.96566 35.3564 2.97802 35.3143 2.97852C35.2722 2.97902 35.2309 2.96763 35.195 2.94567C34.6191 2.57895 33.984 2.315 33.3178 2.16556C33.277 2.15637 33.2397 2.13555 33.2105 2.10562C33.1813 2.07569 33.1614 2.03793 33.1533 1.99691L32.9254 0.864805H31.0748L30.848 1.99691C30.8398 2.0379 30.8199 2.07564 30.7908 2.10557C30.7616 2.1355 30.7244 2.15634 30.6836 2.16556C30.0175 2.31577 29.3822 2.57975 28.8058 2.94589C28.7705 2.96827 28.7294 2.97992 28.6876 2.97942C28.6457 2.97892 28.6049 2.96629 28.5701 2.94308L27.608 2.30091L26.3001 3.60794L26.9433 4.56967C26.9665 4.60447 26.9792 4.64526 26.9797 4.68709C26.9802 4.72892 26.9685 4.77 26.9461 4.80535C26.58 5.38132 26.3166 6.01648 26.1678 6.68253C26.1582 6.72564 26.1357 6.76478 26.1032 6.79469C26.0707 6.82461 26.0299 6.84387 25.9861 6.84989L24.865 7.07475V8.92534L25.9935 9.15151C26.0356 9.15896 26.0747 9.17866 26.1057 9.20815C26.1367 9.23764 26.1584 9.27562 26.168 9.31734C26.3169 9.9834 26.5802 10.6186 26.9463 11.1945C26.9687 11.2298 26.9804 11.2709 26.9799 11.3126C26.9795 11.3544 26.9669 11.3952 26.9438 11.43L26.3038 12.3919L27.6086 13.7003L28.5546 13.0693C28.5935 13.0382 28.6418 13.0212 28.6916 13.0211H28.6921Z" />
      </mask>
      <path
        d="M32.9256 15.5675H31.0748C30.9758 15.5668 30.8799 15.5324 30.803 15.47C30.7261 15.4076 30.6727 15.3209 30.6516 15.2242L30.4512 14.2237C29.833 14.0698 29.2413 13.824 28.696 13.4946L27.8475 14.0588C27.765 14.1139 27.666 14.1389 27.5672 14.1297C27.4684 14.1205 27.3758 14.0776 27.3048 14.0082L25.9963 12.6977C25.9257 12.6262 25.8822 12.5324 25.873 12.4324C25.8639 12.3323 25.8897 12.2322 25.9461 12.1491L26.5083 11.3059C26.1782 10.7605 25.9326 10.1683 25.7799 9.54935L24.7786 9.34913C24.6813 9.32838 24.594 9.27508 24.5311 9.19803C24.4682 9.12099 24.4335 9.0248 24.4326 8.92534V7.07453C24.4333 6.97551 24.4677 6.87967 24.5301 6.80278C24.5925 6.72588 24.6792 6.6725 24.776 6.6514L25.7783 6.45032C25.9311 5.83151 26.1767 5.23937 26.5066 4.69399L25.9414 3.84859C25.8861 3.76602 25.861 3.66695 25.8702 3.56804C25.8794 3.46912 25.9224 3.3764 25.992 3.30545L27.3025 1.99518C27.3738 1.92451 27.4675 1.88079 27.5675 1.87148C27.6675 1.86218 27.7676 1.88786 27.8508 1.94416L28.694 2.5074C29.2398 2.17744 29.8319 1.93131 30.4508 1.77724L30.651 0.778319C30.6717 0.681051 30.725 0.593767 30.8021 0.530872C30.8791 0.467978 30.9753 0.433233 31.0748 0.432373H32.9256C33.0246 0.433093 33.1205 0.467476 33.1973 0.529874C33.2742 0.592271 33.3276 0.67897 33.3487 0.775724L33.5492 1.77616C34.169 1.92958 34.7621 2.1759 35.3083 2.50675L36.1515 1.94135C36.2341 1.88611 36.3332 1.86099 36.4321 1.8702C36.531 1.87941 36.6237 1.9224 36.6947 1.99194L38.0052 3.30221C38.0761 3.37344 38.1199 3.46714 38.1292 3.5672C38.1385 3.66726 38.1127 3.76745 38.0562 3.85053L37.494 4.69572C37.8235 5.24094 38.0693 5.83254 38.2231 6.45075L39.2201 6.65075C39.3177 6.67116 39.4053 6.72431 39.4686 6.80139C39.5318 6.87846 39.5668 6.97484 39.5678 7.07453V8.92534C39.567 9.02437 39.5326 9.1202 39.4703 9.1971C39.4079 9.274 39.3212 9.32738 39.2244 9.34848L38.224 9.54913C38.0702 10.1673 37.8244 10.7589 37.4949 11.3042L38.0592 12.1526C38.1143 12.2351 38.1393 12.3341 38.1301 12.433C38.1208 12.5318 38.0779 12.6244 38.0084 12.6953L36.6979 14.0058C36.6265 14.0764 36.5329 14.1201 36.4329 14.1294C36.3329 14.1387 36.2328 14.1131 36.1496 14.0568L35.3063 13.4931C34.7605 13.8239 34.1678 14.0702 33.5483 14.2237L33.3494 15.2216C33.3286 15.3188 33.2753 15.4061 33.1983 15.469C33.1212 15.5319 33.025 15.5666 32.9256 15.5675ZM28.6921 13.0211C28.7325 13.021 28.7722 13.0324 28.8065 13.054C29.3829 13.4201 30.0181 13.6841 30.6843 13.8343C30.7251 13.8435 30.7623 13.8644 30.7914 13.8943C30.8206 13.9242 30.8405 13.962 30.8486 14.003L31.075 15.1351H32.9236L33.1524 14.003C33.1606 13.962 33.1805 13.9242 33.2097 13.8943C33.2389 13.8643 33.2761 13.8435 33.3169 13.8343C33.9831 13.6849 34.6183 13.4209 35.1941 13.0542C35.23 13.0323 35.2714 13.0209 35.3135 13.0214C35.3555 13.0219 35.3966 13.0343 35.432 13.057L36.3918 13.6992L37.6994 12.3919L37.0689 11.446C37.0608 11.4361 37.0536 11.4256 37.0473 11.4144C37.0285 11.3806 37.0191 11.3424 37.0201 11.3037C37.0211 11.265 37.0324 11.2273 37.0529 11.1945C37.4192 10.6182 37.6832 9.98289 37.8333 9.3167C37.8425 9.27594 37.8633 9.23873 37.8933 9.20956C37.9232 9.1804 37.9609 9.16053 38.0019 9.15237L39.1353 8.92513V7.07453L38.0032 6.84751C37.9622 6.83934 37.9245 6.81948 37.8946 6.79032C37.8646 6.76115 37.8438 6.72394 37.8346 6.68318C37.6845 6.01699 37.4205 5.38172 37.0542 4.80535C37.0335 4.77265 37.022 4.73499 37.0208 4.69632C37.0197 4.65764 37.0289 4.61935 37.0475 4.58545C37.0551 4.57165 37.0641 4.55874 37.0746 4.54697L37.699 3.60794L36.392 2.29983L35.4328 2.94286C35.3975 2.96566 35.3564 2.97802 35.3143 2.97852C35.2722 2.97902 35.2309 2.96763 35.195 2.94567C34.6191 2.57895 33.984 2.315 33.3178 2.16556C33.277 2.15637 33.2397 2.13555 33.2105 2.10562C33.1813 2.07569 33.1614 2.03793 33.1533 1.99691L32.9254 0.864805H31.0748L30.848 1.99691C30.8398 2.0379 30.8199 2.07564 30.7908 2.10557C30.7616 2.1355 30.7244 2.15634 30.6836 2.16556C30.0175 2.31577 29.3822 2.57975 28.8058 2.94589C28.7705 2.96827 28.7294 2.97992 28.6876 2.97942C28.6457 2.97892 28.6049 2.96629 28.5701 2.94308L27.608 2.30091L26.3001 3.60794L26.9433 4.56967C26.9665 4.60447 26.9792 4.64526 26.9797 4.68709C26.9802 4.72892 26.9685 4.77 26.9461 4.80535C26.58 5.38132 26.3166 6.01648 26.1678 6.68253C26.1582 6.72564 26.1357 6.76478 26.1032 6.79469C26.0707 6.82461 26.0299 6.84387 25.9861 6.84989L24.865 7.07475V8.92534L25.9935 9.15151C26.0356 9.15896 26.0747 9.17866 26.1057 9.20815C26.1367 9.23764 26.1584 9.27562 26.168 9.31734C26.3169 9.9834 26.5802 10.6186 26.9463 11.1945C26.9687 11.2298 26.9804 11.2709 26.9799 11.3126C26.9795 11.3544 26.9669 11.3952 26.9438 11.43L26.3038 12.3919L27.6086 13.7003L28.5546 13.0693C28.5935 13.0382 28.6418 13.0212 28.6916 13.0211H28.6921Z"
        fill="#EEF2F6"
      />
      <path
        d="M32.9256 15.5675H31.0748C30.9758 15.5668 30.8799 15.5324 30.803 15.47C30.7261 15.4076 30.6727 15.3209 30.6516 15.2242L30.4512 14.2237C29.833 14.0698 29.2413 13.824 28.696 13.4946L27.8475 14.0588C27.765 14.1139 27.666 14.1389 27.5672 14.1297C27.4684 14.1205 27.3758 14.0776 27.3048 14.0082L25.9963 12.6977C25.9257 12.6262 25.8822 12.5324 25.873 12.4324C25.8639 12.3323 25.8897 12.2322 25.9461 12.1491L26.5083 11.3059C26.1782 10.7605 25.9326 10.1683 25.7799 9.54935L24.7786 9.34913C24.6813 9.32838 24.594 9.27508 24.5311 9.19803C24.4682 9.12099 24.4335 9.0248 24.4326 8.92534V7.07453C24.4333 6.97551 24.4677 6.87967 24.5301 6.80278C24.5925 6.72588 24.6792 6.6725 24.776 6.6514L25.7783 6.45032C25.9311 5.83151 26.1767 5.23937 26.5066 4.69399L25.9414 3.84859C25.8861 3.76602 25.861 3.66695 25.8702 3.56804C25.8794 3.46912 25.9224 3.3764 25.992 3.30545L27.3025 1.99518C27.3738 1.92451 27.4675 1.88079 27.5675 1.87148C27.6675 1.86218 27.7676 1.88786 27.8508 1.94416L28.694 2.5074C29.2398 2.17744 29.8319 1.93131 30.4508 1.77724L30.651 0.778319C30.6717 0.681051 30.725 0.593767 30.8021 0.530872C30.8791 0.467978 30.9753 0.433233 31.0748 0.432373H32.9256C33.0246 0.433093 33.1205 0.467476 33.1973 0.529874C33.2742 0.592271 33.3276 0.67897 33.3487 0.775724L33.5492 1.77616C34.169 1.92958 34.7621 2.1759 35.3083 2.50675L36.1515 1.94135C36.2341 1.88611 36.3332 1.86099 36.4321 1.8702C36.531 1.87941 36.6237 1.9224 36.6947 1.99194L38.0052 3.30221C38.0761 3.37344 38.1199 3.46714 38.1292 3.5672C38.1385 3.66726 38.1127 3.76745 38.0562 3.85053L37.494 4.69572C37.8235 5.24094 38.0693 5.83254 38.2231 6.45075L39.2201 6.65075C39.3177 6.67116 39.4053 6.72431 39.4686 6.80139C39.5318 6.87846 39.5668 6.97484 39.5678 7.07453V8.92534C39.567 9.02437 39.5326 9.1202 39.4703 9.1971C39.4079 9.274 39.3212 9.32738 39.2244 9.34848L38.224 9.54913C38.0702 10.1673 37.8244 10.7589 37.4949 11.3042L38.0592 12.1526C38.1143 12.2351 38.1393 12.3341 38.1301 12.433C38.1208 12.5318 38.0779 12.6244 38.0084 12.6953L36.6979 14.0058C36.6265 14.0764 36.5329 14.1201 36.4329 14.1294C36.3329 14.1387 36.2328 14.1131 36.1496 14.0568L35.3063 13.4931C34.7605 13.8239 34.1678 14.0702 33.5483 14.2237L33.3494 15.2216C33.3286 15.3188 33.2753 15.4061 33.1983 15.469C33.1212 15.5319 33.025 15.5666 32.9256 15.5675ZM28.6921 13.0211C28.7325 13.021 28.7722 13.0324 28.8065 13.054C29.3829 13.4201 30.0181 13.6841 30.6843 13.8343C30.7251 13.8435 30.7623 13.8644 30.7914 13.8943C30.8206 13.9242 30.8405 13.962 30.8486 14.003L31.075 15.1351H32.9236L33.1524 14.003C33.1606 13.962 33.1805 13.9242 33.2097 13.8943C33.2389 13.8643 33.2761 13.8435 33.3169 13.8343C33.9831 13.6849 34.6183 13.4209 35.1941 13.0542C35.23 13.0323 35.2714 13.0209 35.3135 13.0214C35.3555 13.0219 35.3966 13.0343 35.432 13.057L36.3918 13.6992L37.6994 12.3919L37.0689 11.446C37.0608 11.4361 37.0536 11.4256 37.0473 11.4144C37.0285 11.3806 37.0191 11.3424 37.0201 11.3037C37.0211 11.265 37.0324 11.2273 37.0529 11.1945C37.4192 10.6182 37.6832 9.98289 37.8333 9.3167C37.8425 9.27594 37.8633 9.23873 37.8933 9.20956C37.9232 9.1804 37.9609 9.16053 38.0019 9.15237L39.1353 8.92513V7.07453L38.0032 6.84751C37.9622 6.83934 37.9245 6.81948 37.8946 6.79032C37.8646 6.76115 37.8438 6.72394 37.8346 6.68318C37.6845 6.01699 37.4205 5.38172 37.0542 4.80535C37.0335 4.77265 37.022 4.73499 37.0208 4.69632C37.0197 4.65764 37.0289 4.61935 37.0475 4.58545C37.0551 4.57165 37.0641 4.55874 37.0746 4.54697L37.699 3.60794L36.392 2.29983L35.4328 2.94286C35.3975 2.96566 35.3564 2.97802 35.3143 2.97852C35.2722 2.97902 35.2309 2.96763 35.195 2.94567C34.6191 2.57895 33.984 2.315 33.3178 2.16556C33.277 2.15637 33.2397 2.13555 33.2105 2.10562C33.1813 2.07569 33.1614 2.03793 33.1533 1.99691L32.9254 0.864805H31.0748L30.848 1.99691C30.8398 2.0379 30.8199 2.07564 30.7908 2.10557C30.7616 2.1355 30.7244 2.15634 30.6836 2.16556C30.0175 2.31577 29.3822 2.57975 28.8058 2.94589C28.7705 2.96827 28.7294 2.97992 28.6876 2.97942C28.6457 2.97892 28.6049 2.96629 28.5701 2.94308L27.608 2.30091L26.3001 3.60794L26.9433 4.56967C26.9665 4.60447 26.9792 4.64526 26.9797 4.68709C26.9802 4.72892 26.9685 4.77 26.9461 4.80535C26.58 5.38132 26.3166 6.01648 26.1678 6.68253C26.1582 6.72564 26.1357 6.76478 26.1032 6.79469C26.0707 6.82461 26.0299 6.84387 25.9861 6.84989L24.865 7.07475V8.92534L25.9935 9.15151C26.0356 9.15896 26.0747 9.17866 26.1057 9.20815C26.1367 9.23764 26.1584 9.27562 26.168 9.31734C26.3169 9.9834 26.5802 10.6186 26.9463 11.1945C26.9687 11.2298 26.9804 11.2709 26.9799 11.3126C26.9795 11.3544 26.9669 11.3952 26.9438 11.43L26.3038 12.3919L27.6086 13.7003L28.5546 13.0693C28.5935 13.0382 28.6418 13.0212 28.6916 13.0211H28.6921Z"
        stroke="#EEF2F6"
        strokeWidth="0.6"
        mask="url(#tutorials-path-1-outside-1)"
      />
      <path
        d="M34.0037 12.0731L34.0689 12.2082C34.2852 12.1038 34.4922 11.9809 34.6874 11.8408L34.6875 11.8409L34.6918 11.8375C34.7669 11.7794 34.8164 11.6944 34.83 11.6005C34.8436 11.5066 34.8202 11.411 34.7648 11.334C34.7093 11.257 34.6261 11.2045 34.5327 11.1876C34.4393 11.1707 34.343 11.1908 34.2641 11.2435L34.264 11.2434L34.2599 11.2464C34.0991 11.3619 33.9286 11.4632 33.7502 11.5492L33.7502 11.5492L33.7499 11.5493C33.6753 11.5855 33.6152 11.6459 33.5794 11.7206C33.5435 11.7954 33.5341 11.8801 33.5526 11.9608C33.5712 12.0416 33.6166 12.1138 33.6814 12.1654C33.7463 12.217 33.8267 12.2452 33.9096 12.2452L33.9104 12.2452C33.9656 12.2449 34.0201 12.2321 34.0697 12.2078L34.0037 12.0731ZM34.0037 12.0731C34.2122 11.9724 34.4118 11.8539 34.6 11.7189L33.9096 12.0952C33.9422 12.095 33.9744 12.0875 34.0037 12.0731Z"
        fill="#EEF2F6"
        stroke="#EEF2F6"
        strokeWidth="0.3"
      />
      <path
        d="M36.6832 8.23696L36.6832 8.23697L36.6834 8.23427C36.6881 8.15565 36.6906 8.07913 36.6906 8.00002C36.6906 7.07231 36.4155 6.16545 35.9001 5.39409C35.3847 4.62274 34.6521 4.02154 33.795 3.66652C32.9379 3.3115 31.9948 3.21862 31.0849 3.3996C30.1751 3.58059 29.3393 4.02732 28.6833 4.6833C28.0273 5.33929 27.5806 6.17506 27.3996 7.08494C27.2186 7.99481 27.3115 8.93792 27.6665 9.79501C28.0215 10.6521 28.6227 11.3847 29.3941 11.9001C30.1654 12.4155 31.0723 12.6906 32 12.6906C32.0767 12.6906 32.153 12.6883 32.2295 12.6843L32.2295 12.6843L32.231 12.6842C32.279 12.6812 32.326 12.6688 32.3693 12.6476C32.4125 12.6264 32.4512 12.597 32.483 12.5609L32.3706 12.4616L32.483 12.5609C32.5149 12.5248 32.5393 12.4827 32.5549 12.4372C32.5706 12.3916 32.5771 12.3435 32.574 12.2954C32.571 12.2474 32.5586 12.2004 32.5374 12.1571C32.5163 12.1139 32.4868 12.0752 32.4507 12.0434L32.3515 12.1558L32.4507 12.0434C32.4146 12.0115 32.3726 11.9871 32.327 11.9715C32.2815 11.9558 32.2333 11.9494 32.1853 11.9524L32.1851 11.9524C32.1236 11.9563 32.0619 11.9581 32 11.9581C31.2172 11.9581 30.4519 11.726 29.801 11.2911C29.1501 10.8561 28.6428 10.238 28.3432 9.51472C28.0436 8.79147 27.9652 7.99562 28.118 7.22783C28.2707 6.46003 28.6477 5.75476 29.2012 5.20121C29.7548 4.64766 30.46 4.27069 31.2278 4.11796C31.9956 3.96524 32.7915 4.04362 33.5147 4.3432C34.238 4.64278 34.8561 5.1501 35.2911 5.80101C35.726 6.45192 35.9581 7.21718 35.9581 8.00002C35.9581 8.06382 35.9563 8.12562 35.9524 8.18929C35.9464 8.2862 35.9791 8.38151 36.0434 8.45429C36.1076 8.52709 36.1982 8.57137 36.2951 8.5774L36.2951 8.57742L36.2975 8.57753C36.3934 8.58198 36.4873 8.54892 36.5593 8.48536C36.6313 8.42179 36.6757 8.33271 36.6832 8.23696Z"
        fill="#EEF2F6"
        stroke="#EEF2F6"
        strokeWidth="0.3"
      />
      <path
        d="M35.5435 10.8397L35.5434 10.8397C35.4759 10.8397 35.4098 10.8211 35.3523 10.7859L35.4305 10.6579L35.3523 10.7859C35.2948 10.7507 35.2481 10.7003 35.2173 10.6403C35.1866 10.5803 35.1731 10.5129 35.1782 10.4457C35.1833 10.3785 35.2069 10.314 35.2463 10.2593M35.5435 10.8397L35.8405 10.6874C35.9797 10.494 36.1024 10.2893 36.2073 10.0753L36.2075 10.0749C36.2499 9.9879 36.256 9.88771 36.2247 9.79619C36.1934 9.70466 36.1272 9.62924 36.0405 9.58638C35.9537 9.54353 35.8536 9.53673 35.7619 9.56746C35.6701 9.5982 35.5943 9.66397 35.5509 9.75043L35.5509 9.75042L35.5503 9.75171C35.4633 9.92913 35.3617 10.0989 35.2463 10.2593M35.5435 10.8397C35.6015 10.8397 35.6587 10.8258 35.7103 10.7993C35.762 10.7729 35.8066 10.7345 35.8404 10.6874L35.5435 10.8397ZM35.2463 10.2593C35.2463 10.2593 35.2463 10.2593 35.2464 10.2593L35.368 10.347L35.2462 10.2594C35.2463 10.2594 35.2463 10.2594 35.2463 10.2593Z"
        fill="#EEF2F6"
        stroke="#EEF2F6"
        strokeWidth="0.3"
      />
      <mask id="tutorials-path-5-inside-2" fill="white">
        <path d="M17.4029 22.5C17.2263 22.4998 17.054 22.4364 16.9092 22.3182C16.7644 22.2 16.6541 22.0327 16.5931 21.8389C16.5321 21.6451 16.5234 21.4342 16.5682 21.2344C16.6129 21.0346 16.7089 20.8557 16.8433 20.7218L20.2611 17.3208L16.8433 13.9199C16.757 13.8337 16.686 13.7285 16.6344 13.6102C16.5828 13.4919 16.5517 13.3629 16.5427 13.2306C16.5338 13.0982 16.5472 12.9651 16.5823 12.8388C16.6173 12.7126 16.6733 12.5956 16.747 12.4946C16.8207 12.3936 16.9107 12.3106 17.0119 12.2503C17.113 12.19 17.2233 12.1536 17.3365 12.1431C17.4497 12.1327 17.5635 12.1484 17.6715 12.1894C17.7795 12.2304 17.8795 12.2958 17.9659 12.382L22.1557 16.5514C22.2511 16.6462 22.3277 16.7641 22.3802 16.897C22.4328 17.0298 22.46 17.1745 22.46 17.3208C22.46 17.4672 22.4328 17.6119 22.3802 17.7447C22.3277 17.8776 22.2511 17.9955 22.1557 18.0903L17.9659 22.2597C17.8088 22.4158 17.6091 22.5011 17.4029 22.5Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 7.7C1 5.65655 2.65655 4 4.7 4H34.3C36.3435 4 38 5.65655 38 7.7V26.94C38 28.9835 36.3435 30.64 34.3 30.64H4.7C2.65655 30.64 1 28.9835 1 26.94V7.7ZM4.7 5.48C3.47393 5.48 2.48 6.47393 2.48 7.7V26.94C2.48 28.1661 3.47393 29.16 4.7 29.16H34.3C35.5261 29.16 36.52 28.1661 36.52 26.94V7.7C36.52 6.47393 35.5261 5.48 34.3 5.48H4.7Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1 33.6C12.1 33.1913 12.4313 32.86 12.84 32.86H36.52C36.9287 32.86 37.26 33.1913 37.26 33.6C37.26 34.0087 36.9287 34.34 36.52 34.34H12.84C12.4313 34.34 12.1 34.0087 12.1 33.6Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.74 33.6C1.74 33.1913 2.07131 32.86 2.48 32.86H5.44C5.84869 32.86 6.18 33.1913 6.18 33.6C6.18 34.0087 5.84869 34.34 5.44 34.34H2.48C2.07131 34.34 1.74 34.0087 1.74 33.6Z"
        />
        <path d="M4.7 32.86C4.7 32.0426 5.36262 31.38 6.18 31.38H12.1C12.9174 31.38 13.58 32.0426 13.58 32.86V34.34C13.58 35.1574 12.9174 35.82 12.1 35.82H6.18C5.36262 35.82 4.7 35.1574 4.7 34.34V32.86Z" />
      </mask>
      <path
        d="M17.4029 22.5L17.408 21.5L17.4037 21.5L17.4029 22.5ZM16.8433 20.7218L16.138 20.0129L16.1373 20.0136L16.8433 20.7218ZM20.2611 17.3208L20.9665 18.0297L21.6788 17.3208L20.9665 16.612L20.2611 17.3208ZM16.8433 13.9199L16.1369 14.6277L16.138 14.6288L16.8433 13.9199ZM17.9659 12.382L17.2594 13.0898L17.2605 13.0909L17.9659 12.382ZM22.1557 16.5514L21.4503 17.2602L21.4508 17.2607L22.1557 16.5514ZM22.1557 18.0903L21.4508 17.381L21.4503 17.3815L22.1557 18.0903ZM17.9659 22.2597L18.6708 22.969L18.6713 22.9685L17.9659 22.2597ZM17.4037 21.5C17.4715 21.5001 17.5194 21.5254 17.5416 21.5435L16.2768 23.0928C16.5886 23.3474 16.9811 23.4996 17.402 23.5L17.4037 21.5ZM17.5416 21.5435C17.5518 21.5518 17.5551 21.5572 17.5545 21.5563C17.5539 21.5554 17.5505 21.5498 17.547 21.5388L15.6392 22.1391C15.7535 22.5021 15.9677 22.8405 16.2768 23.0928L17.5416 21.5435ZM17.547 21.5388C17.5393 21.5143 17.5374 21.4823 17.544 21.4529L15.5923 21.0159C15.5094 21.3861 15.525 21.776 15.6392 22.1391L17.547 21.5388ZM17.544 21.4529C17.547 21.4395 17.5509 21.4307 17.5532 21.4263C17.5556 21.422 17.5553 21.424 17.5493 21.43L16.1373 20.0136C15.8576 20.2924 15.6752 20.6458 15.5923 21.0159L17.544 21.4529ZM17.5487 21.4306L20.9665 18.0297L19.5558 16.612L16.138 20.0129L17.5487 21.4306ZM20.9665 16.612L17.5487 13.2111L16.138 14.6288L19.5558 18.0297L20.9665 16.612ZM17.5498 13.2122C17.5572 13.2196 17.5554 13.2205 17.551 13.2105L15.7177 14.0099C15.8165 14.2365 15.9567 14.4479 16.1369 14.6277L17.5498 13.2122ZM17.551 13.2105C17.5467 13.2005 17.5419 13.1842 17.5405 13.1632L15.545 13.298C15.5615 13.5417 15.619 13.7834 15.7177 14.0099L17.551 13.2105ZM17.5405 13.1632C17.539 13.1422 17.5414 13.1224 17.5459 13.1063L15.6187 12.5714C15.5531 12.8079 15.5285 13.0543 15.545 13.298L17.5405 13.1632ZM17.5459 13.1063C17.5503 13.0903 17.5553 13.0834 17.5547 13.0842L15.9393 11.905C15.7913 12.1078 15.6844 12.3349 15.6187 12.5714L17.5459 13.1063ZM17.5547 13.0842C17.554 13.0852 17.5455 13.0964 17.524 13.1092L16.4998 11.3914C16.2759 11.5249 16.0874 11.7021 15.9393 11.905L17.5547 13.0842ZM17.524 13.1092C17.5018 13.1225 17.4692 13.1351 17.4285 13.1389L17.2445 11.1474C16.9774 11.1721 16.7242 11.2576 16.4998 11.3914L17.524 13.1092ZM17.4285 13.1389C17.3875 13.1427 17.3486 13.1365 17.3166 13.1243L18.0264 11.2545C17.7784 11.1604 17.5119 11.1227 17.2445 11.1474L17.4285 13.1389ZM17.3166 13.1243C17.2854 13.1124 17.2672 13.0976 17.2594 13.0898L18.6723 11.6743C18.4919 11.4941 18.2737 11.3483 18.0264 11.2545L17.3166 13.1243ZM17.2605 13.0909L21.4503 17.2602L22.8611 15.8426L18.6713 11.6732L17.2605 13.0909ZM21.4508 17.2607C21.4464 17.2564 21.445 17.2541 21.4455 17.2548C21.446 17.2555 21.4479 17.2587 21.4503 17.2648L23.3101 16.5292C23.2101 16.2763 23.0597 16.04 22.8606 15.8421L21.4508 17.2607ZM21.4503 17.2648C21.4554 17.2776 21.46 17.2972 21.46 17.3208H23.46C23.46 17.0517 23.4102 16.782 23.3101 16.5292L21.4503 17.2648ZM21.46 17.3208C21.46 17.3445 21.4554 17.3641 21.4503 17.3769L23.3101 18.1125C23.4102 17.8597 23.46 17.59 23.46 17.3208H21.46ZM21.4503 17.3769C21.4479 17.383 21.446 17.3862 21.4455 17.3869C21.445 17.3876 21.4464 17.3853 21.4508 17.381L22.8606 18.7996C23.0597 18.6017 23.2101 18.3654 23.3101 18.1125L21.4503 17.3769ZM21.4503 17.3815L17.2605 21.5508L18.6713 22.9685L22.8611 18.7991L21.4503 17.3815ZM17.261 21.5504C17.277 21.5345 17.3272 21.4996 17.408 21.5L17.3977 23.5C17.8909 23.5025 18.3406 23.2971 18.6708 22.969L17.261 21.5504ZM4.7 3C2.10426 3 0 5.10426 0 7.7H2C2 6.20883 3.20883 5 4.7 5V3ZM34.3 3H4.7V5H34.3V3ZM39 7.7C39 5.10426 36.8957 3 34.3 3V5C35.7912 5 37 6.20883 37 7.7H39ZM39 26.94V7.7H37V26.94H39ZM34.3 31.64C36.8957 31.64 39 29.5357 39 26.94H37C37 28.4312 35.7912 29.64 34.3 29.64V31.64ZM4.7 31.64H34.3V29.64H4.7V31.64ZM0 26.94C0 29.5357 2.10426 31.64 4.7 31.64V29.64C3.20883 29.64 2 28.4312 2 26.94H0ZM0 7.7V26.94H2V7.7H0ZM3.48 7.7C3.48 7.02621 4.02621 6.48 4.7 6.48V4.48C2.92164 4.48 1.48 5.92164 1.48 7.7H3.48ZM3.48 26.94V7.7H1.48V26.94H3.48ZM4.7 28.16C4.02621 28.16 3.48 27.6138 3.48 26.94H1.48C1.48 28.7184 2.92164 30.16 4.7 30.16V28.16ZM34.3 28.16H4.7V30.16H34.3V28.16ZM35.52 26.94C35.52 27.6138 34.9738 28.16 34.3 28.16V30.16C36.0784 30.16 37.52 28.7184 37.52 26.94H35.52ZM35.52 7.7V26.94H37.52V7.7H35.52ZM34.3 6.48C34.9738 6.48 35.52 7.02621 35.52 7.7H37.52C37.52 5.92164 36.0784 4.48 34.3 4.48V6.48ZM4.7 6.48H34.3V4.48H4.7V6.48ZM12.84 31.86C11.879 31.86 11.1 32.639 11.1 33.6H13.1C13.1 33.7436 12.9836 33.86 12.84 33.86V31.86ZM36.52 31.86H12.84V33.86H36.52V31.86ZM38.26 33.6C38.26 32.639 37.481 31.86 36.52 31.86V33.86C36.3764 33.86 36.26 33.7436 36.26 33.6H38.26ZM36.52 35.34C37.481 35.34 38.26 34.561 38.26 33.6H36.26C36.26 33.4564 36.3764 33.34 36.52 33.34V35.34ZM12.84 35.34H36.52V33.34H12.84V35.34ZM11.1 33.6C11.1 34.561 11.879 35.34 12.84 35.34V33.34C12.9836 33.34 13.1 33.4564 13.1 33.6H11.1ZM2.48 31.86C1.51902 31.86 0.74 32.639 0.74 33.6H2.74C2.74 33.7436 2.62359 33.86 2.48 33.86V31.86ZM5.44 31.86H2.48V33.86H5.44V31.86ZM7.18 33.6C7.18 32.639 6.40098 31.86 5.44 31.86V33.86C5.29641 33.86 5.18 33.7436 5.18 33.6H7.18ZM5.44 35.34C6.40098 35.34 7.18 34.561 7.18 33.6H5.18C5.18 33.4564 5.29641 33.34 5.44 33.34V35.34ZM2.48 35.34H5.44V33.34H2.48V35.34ZM0.74 33.6C0.74 34.561 1.51902 35.34 2.48 35.34V33.34C2.62359 33.34 2.74 33.4564 2.74 33.6H0.74ZM6.18 32.38H12.1V30.38H6.18V32.38ZM12.58 32.86V34.34H14.58V32.86H12.58ZM12.1 34.82H6.18V36.82H12.1V34.82ZM5.7 34.34V32.86H3.7V34.34H5.7ZM6.18 34.82C5.9149 34.82 5.7 34.6051 5.7 34.34H3.7C3.7 35.7097 4.81033 36.82 6.18 36.82V34.82ZM12.58 34.34C12.58 34.6051 12.3651 34.82 12.1 34.82V36.82C13.4697 36.82 14.58 35.7097 14.58 34.34H12.58ZM12.1 32.38C12.3651 32.38 12.58 32.5949 12.58 32.86H14.58C14.58 31.4903 13.4697 30.38 12.1 30.38V32.38ZM6.18 30.38C4.81033 30.38 3.7 31.4903 3.7 32.86H5.7C5.7 32.5949 5.9149 32.38 6.18 32.38V30.38Z"
        fill="#EEF2F6"
        mask="url(#tutorials-path-5-inside-2)"
      />
    </svg>
  );
};

export default TutorialsIcon;