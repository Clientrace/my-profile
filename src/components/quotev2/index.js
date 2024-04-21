const Quote = () => {
  return (
    <div className="flex w-full h-80 align-middle text-center justify-center items-center">
      <div className="w-full h-fit">
        <div className="text-3xl font-italic text-gray-500 text-center">
          <q>
            Any sufficiently advanced technology
            <br /> is indistinguishable from magic.
          </q>
        </div>
        <div className="text-base text-center text-gray-500">- Arthur C.</div>
      </div>
    </div>
  );
};

export default Quote;
