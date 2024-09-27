import Layout from "../../components/Layout";
import WorkoutDetails from "../../components/WorkoutDetails";

export default function WorkoutPage({ params }) {
  return (
    <Layout>
      <WorkoutDetails id={params.id} />
    </Layout>
  );
}
