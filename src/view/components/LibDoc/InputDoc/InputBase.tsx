import React from "react";
import {CodeBox} from "../../CodeBox/CodeBox";
import Input from "../../../../lib/components/Input/Input";
import AutoComplete, {DataSourceType} from "../../../../lib/components/AutoInput/AutoInput";

const InputBase:React.FC = () => {
  const code = `
`
  const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
    'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  }

  const handleFetch2 = (query: string) => {
    return fetch('https://api.github.com/search/users?q='+ query)
      .then(res => res.json())
      .then(({ items }) => {
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
      })
  }
  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<any>
    return (
      <>
        <b>Name: {itemWithGithub.value}</b>
        <span>url: {itemWithGithub.url}</span>
      </>
    )
  }

  return (
    <CodeBox
      title="基础使用"
      description="描述"
      defaultVisible={true}
      code={code}>
      <Input icon={"edit"} disabled/>
      <AutoComplete
        fetchSuggestions={handleFetch}
        onSelect={(item) => {
          console.log(item);
        }}
        placeholder="输入湖人队球员英文名试试"
      />
      <AutoComplete
        fetchSuggestions={handleFetch2}
        placeholder="输入 Github 用户名试试"
        renderOption={renderOption}
      />
    </CodeBox>
  )
}


export {InputBase};