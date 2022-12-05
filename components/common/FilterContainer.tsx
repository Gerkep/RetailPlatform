import styled from "styled-components";
import FilterDropdown from "./FilterDropdown";
import PageTitle from "./PageTitle";
import SearchContainer from "./SearchContainer";

const FilterContainer = ({filters, filter, setFilter, title}: any) => {
    return (
        <MainContainer>
            <div>
                <PageTitle>{title}</PageTitle>
            </div>
            <div style={{display: "flex"}}>
                <FilterDropdown values={filters} value={filter} onChange={setFilter} error={undefined}/>
                <SearchContainer />
            </div>
        </MainContainer>
    )
}

export default FilterContainer;

const MainContainer = styled.div`
  position: sticky;
  top: 0rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem 1rem 2rem;
  margin-top: 3rem;
  backdrop-filter: blur(10px);
`