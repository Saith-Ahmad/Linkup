import CallList from "@/components/shared/CallList";


const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Sheduled Meatings</h1>
      <CallList type="upcoming" />
    </section>
  );
};

export default PreviousPage; 