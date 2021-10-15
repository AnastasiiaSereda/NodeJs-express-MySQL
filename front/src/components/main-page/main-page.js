import CreateNewValue from "./../creation/creation";

const MainBlockInput = ({ addItem }) => {
  return (
    <div>
      <div className="mainAdd">
        <CreateNewValue addItem={addItem} />
      </div>
    </div>
  );
};
export default MainBlockInput;