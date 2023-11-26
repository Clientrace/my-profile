import Icon from "../../components/icon/icon";

const Heading = ({
  children,
  description = "'",
  subtitle = "",
  iconUrl = null,
}) => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="sm:flex align-middle gap-x-2">
          <div className="sm:mt-2 mt-2 sm:-ml-6">
            <Icon src={iconUrl ? iconUrl : "/assets/block.svg"} small />
          </div>
          <diV className="text-base sm:text-3xl tracking-wider">
            {children}
            <div className="sm:text-sm text-xs mt-0 sm:mt-1">{subtitle}</div>
          </diV>
        </div>
        <div className="mt-1 text-sm sm:text-base">{description}</div>
      </div>
    </div>
  );
};

export default Heading;
