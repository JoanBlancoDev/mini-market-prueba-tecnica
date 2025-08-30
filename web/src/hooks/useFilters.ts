import { useRouter, useSearchParams } from "next/navigation";

export const useFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("search", e.target.value);
    } else {
      params.delete("search");
    }
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  const handleReset = () => {
    const params = new URLSearchParams();
    router.push(`?${params.toString()}`);
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set(e.target.name, e.target.value);
    } else {
      params.delete(e.target.name);
    }
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  return {
    handleSelectChange,
    handleReset,
    handleSearchChange,
  };
};
