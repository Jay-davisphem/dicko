import { useState } from "react";
import View from "./View";
import Transition from "./Transition";
import NavBtn from "./NavBtn";
import bookImg from "../../assets/book.png";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-sec-col">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 md:h-12 md:w-12 text-ter-col"
                  src={bookImg}
                  alt="Logo"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-10">
                  <View textVal="text-base" />
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <NavBtn setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>
          </div>
        </div>

        <Transition isOpen={isOpen}>
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <View textVal="text-base" />
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}

export default Nav;
