import React from 'react'
import InputStyle from './UI/InputStyle/InputStyle'
import SelectStyle from './UI/SelectStyle/SelectStyle'

const FormFilter = ({filter, setFilter}) => {
    return (
        <div>
            <InputStyle
                value={filter.search}
                onChange={(event) => setFilter({...filter, search: event.target.value})}
                placeholder="Search..."
            />
            <hr className="filter__hr" />
            <SelectStyle value={filter.sort}
                defaultValue="Sort post"
                options={[
                    {
                        value: 'title',
                        name: 'by title'
                    },
                    {
                        value: 'body',
                        name: 'by description'
                    },
                ]}
                onChange={(sort) => setFilter({...filter, sort})} />
            <hr className="filter__hr" />
        </div>
    )
}

export default FormFilter