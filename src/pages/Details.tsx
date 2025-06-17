import Layout from '@/pages/Layout';
import MovieDetails from '@/components/MovieDetails';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Layout pageTitle="Movie Details">
      <MovieDetails id={id} />
    </Layout>
  );
};

export default DetailsPage;
