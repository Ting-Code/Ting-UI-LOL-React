import React, {useEffect, useMemo, useState} from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Checkbox} from "../../../lib";
import {CheckboxGroup} from "../../../lib/components/Checkbox/CheckboxGroup";



const CheckboxOption:React.FC = () => {
  const code = `const options = useMemo(() => {
  return ['流浪法师', '无极剑圣', '熔岩巨兽'];
}, []);
const [selectOption, setSelectOption] = useState(['熔岩巨兽'])
const [indeterminate, setIndeterminate] = useState(false)
const [all, setAll] = useState(false)
useEffect(() => {
  if(selectOption.length === options.length){
    setAll(true)
    setIndeterminate(false)
  }else if(selectOption.length === 0){
    setAll(false)
    setIndeterminate(false)
  }else {
    setAll(false)
    setIndeterminate(true)
  }
}, [selectOption, options])
const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
  if(e.target.checked){
    setSelectOption(options)
  }else {
    setSelectOption([])
  }
}
const handleChange = (value:string[]) => {
  console.log(value)
  setSelectOption(value)
}
return (
  <>
    <Checkbox value='全选' checked={all} indeterminate={indeterminate} onChange={handleSelectAll}>全选</Checkbox>
    <CheckboxGroup
    options={options}
    selectOptions={selectOption}
    onChange={handleChange}/>
  </>
)`

  const options = useMemo(() => {
    return ['流浪法师', '无极剑圣', '熔岩巨兽'];
  }, []);
  const [selectOption, setSelectOption] = useState(['熔岩巨兽'])
  const [indeterminate, setIndeterminate] = useState(false)
  const [all, setAll] = useState(false)
  useEffect(() => {
    if(selectOption.length === options.length){
      setAll(true)
      setIndeterminate(false)
    }else if(selectOption.length === 0){
      setAll(false)
      setIndeterminate(false)
    }else {
      setAll(false)
      setIndeterminate(true)
    }
  }, [selectOption, options])
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked){
      setSelectOption(options)
    }else {
      setSelectOption([])
    }
  }
  const handleChange = (value:string[]) => {
    console.log(value)
    setSelectOption(value)
  }
  return (
    <CodeBox
      title="全选功能"
      description={<p><code>indeterminate</code>属性定义半选中状态，<code>options</code>可生成选项</p>}
      defaultVisible={false}
      code={code}>

      <Checkbox value='全选' checked={all} indeterminate={indeterminate} onChange={handleSelectAll}>全选</Checkbox>
      <CheckboxGroup
        options={options}
        selectOptions={selectOption}
        onChange={handleChange}/>
    </CodeBox>
  )
}



export {CheckboxOption};