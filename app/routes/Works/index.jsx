import { Form, useSubmit } from "@remix-run/react"

export async function action({ request }) {
  const data = await request.formData()
  console.log("...data ", data)
  return {}
}

const Works = () => {
  const submit = useSubmit()

  function handleChange(event) {
    submit(event.currentTarget, { replace: true })
  }

  return (
    <>
      <h1>Works</h1>
      <Form method="post" onChange={handleChange}>
        <div>
          <label htmlFor="approved">Approved</label>
          <input type="checkbox" name="approved" value="approved" />
        </div>
        <div>
          <select name="colorChoice" id="cc">
            <option value="blue">blue</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
          </select>
        </div>
        <div>
          <label>description</label>
          <input type="text" name="description" id="discription" />
        </div>
      </Form>
    </>
  )
}

export default Works
