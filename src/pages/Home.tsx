import React from 'react';
import CoursesBlock from '../components/CoursesBlock';
import MapBlock from '../components/MapBlock';
import FormSupport from '../components/FormSupport';
import OptionDesignCard from '../components/OptionDesignCard/indes';
import AdvantagesBlock from '../components/AdvantagesBlock';

const Home:React.FC = () => {
  return (
    <>
      <section>
        <OptionDesignCard />
        <AdvantagesBlock />
      </section>
      <CoursesBlock />
      <MapBlock />
      <FormSupport />
    </>
  );
};

export default Home;
