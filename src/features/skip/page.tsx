import { useState, useEffect } from 'react';
import { useGetSkipsByLocationsQuery } from './services/apis';
import type { ISkippData } from './components/interfaces';
import SkipSizeFilter from './components/skip-listing/SkipFilter';
import SkipListing from './components/skip-listing/SkipListing';
import { locationImages } from './config';
import CardSkeleton from '../../shared/ui/CardSkeleton';

const SkipPage = () => {
  const { data: apiData, isLoading, isError } = useGetSkipsByLocationsQuery();
  const [enhancedData, setEnhancedData] = useState<ISkippData[]>([]);
  const [filteredData, setFilteredData] = useState<ISkippData[]>([]);
  useEffect(() => {
    if (apiData) {
      const enhanced = apiData.map(item => ({
        ...item,
        locationImages: locationImages || []
      }));
      setEnhancedData(enhanced);
      setFilteredData(enhanced);
    }
  }, [apiData]);

  if (isLoading) return <CardSkeleton />;
  if (isError) return <div>Error loading skips</div>;

  return (
    <div>
      <SkipSizeFilter
        data={enhancedData}
        onFilterChange={setFilteredData}
      />
      <SkipListing data={filteredData} />
    </div>
  );
};

export default SkipPage;