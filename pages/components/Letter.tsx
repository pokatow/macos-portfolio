import React from 'react'
import Messages from '../../data/messages.json'

const Letter = () => {
  return (
    <div className="flex flex-col max-w-2xl gap-4 text-left">
      <div className="">
        <div className="mb-4">
          <span className="mb-2 text-xs">
            Last Updated: {Messages.last_update}
          </span>
          <h1 className="text-xl font-semibold ">Dear Elaina,</h1>
        </div>
        {Messages.greeting.map((greeting, index) => {
          return (
            <p key={index} className="mb-4">
              {greeting}
            </p>
          )
        })}
      </div>

      <table className="pb-6 table-auto">
        <tbody>
          {Messages.content.map((data1, index) => {
            return (
              <tr key={index} className="">
                <td className="flex justify-start pr-3 font-bold">
                  {data1.year}
                </td>
                <td className="">
                  {data1.messages.map((data2, index) => {
                    return (
                      <div key={index}>
                        {data2.date && (
                          <h2 className="text-sm font-semibold">
                            {data2.date}
                          </h2>
                        )}
                        {data2.content.map((data3, index) => {
                          return (
                            <p key={index} className="mb-4">
                              {data3}
                            </p>
                          )
                        })}
                      </div>
                    )
                  })}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p className="text-xl text-center">
        Peace out ✌️, <br />
        <span className="font-semibold">Sherwin Variancia</span>
      </p>
    </div>
  )
}

export default Letter
