import Icon from "../../components/icon/icon";

const Heading = ({ children, iconUrl = null }) => {
  return (
    <h2 className="flex align-middle gap-x-2">
      <Icon src={iconUrl ? iconUrl : "/assets/block.svg"} />
      {children}
    </h2>
  );
};

export default Heading;
