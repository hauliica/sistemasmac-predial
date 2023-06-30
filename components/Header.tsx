import { NextPage } from 'next';
import { AcunaLogo } from '@/components/vectors/acunalogo';
import NavMenu from "@/components/NavMenu";

const Header: NextPage = () => {
  return (
    <header className="z-10 flex flex-row items-center justify-between self-stretch overflow-hidden px-0 py-4">
      <div className="flex flex-1 flex-row items-center justify-between">
        <div className="flex flex-1 flex-row items-center justify-start self-stretch">
          <AcunaLogo className="relative w-36" />
        </div>
        <div className="flex flex-1 flex-row items-start justify-end">
          <NavMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;