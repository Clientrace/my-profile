const Quote = () => {
  return (
    <div className="relative flex w-full h-80 align-middle text-center justify-center items-center">
      <div className="w-full h-fit">
        <div className="text-3xl font-italic text-gray-500 text-center">
          <q>
            Any sufficiently advanced technology
            <br /> is indistinguishable from magic.
          </q>
        </div>
        <div className="text-base text-center text-gray-500">- Arthur C.</div>
      </div>
      <div className="absolute bottom-0 right-0" style={{ opacity: 0.1 }}>
        <img src="/assets/mascot.png" />
      </div>
    </div>
  );
};

export default Quote;
