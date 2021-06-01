import React from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {AutoInput, DataSourceType} from "../../../lib/components/AutoInput/AutoInput";

const AutoInputDoc:React.FC = () => {
  const code = `  const lakers = ['厄运小姐', '无极剑圣', '德玛西亚', '皮城女警', '虚空恐惧', '英勇投弹手']
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
    <div className={"InputBase"}>
      <AutoInput
        fetchSuggestions={handleFetch}
        onSelect={(item) => {
          console.log(item);
        }}
        placeholder="请输入英雄名称"
      />
      <AutoInput
        fetchSuggestions={handleFetch2}
        placeholder="输入Github用户名"
        renderOption={renderOption}
      />
    </div>
  )
`;

  const lakers = ['厄运小姐', '无极剑圣', '德玛西亚', '皮城女警', '虚空恐惧', '英勇投弹手']
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
      title="自动补全"
      description={<p> </p>}
      defaultVisible={true}
      code={code}
    >
      <div className={"InputBase"}>
        <AutoInput
          fetchSuggestions={handleFetch}
          onSelect={(item) => {
            console.log(item);
          }}
          placeholder="请输入英雄名称"
        />
        <AutoInput
          fetchSuggestions={handleFetch2}
          placeholder="输入Github用户名"
          renderOption={renderOption}
        />
      </div>
    </CodeBox>
  )
}

export {AutoInputDoc};