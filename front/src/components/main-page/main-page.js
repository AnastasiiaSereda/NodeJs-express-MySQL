import CreateNewValue from "./../creation/creation";

const MainBlockInput = ({ data, setData }) => {
  return (
    <div>
      <div className="mainAdd">
        <CreateNewValue data={data} setData={setData} />
      </div>
    </div>
  );
};
export default MainBlockInput;
