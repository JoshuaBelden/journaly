import React from 'react'
import classNames from 'classnames'

import theme from '@theme'
import LoadingSpinner from '@components/Icons/LoadingSpinner'
import ChevronIcon from '@components/Icons/ChevronIcon'

export type Option = {
  value: string
  displayName: string
}

type Props = {
  options: Option[]
  value: string
  placeholder: string
  onChange: (value: string, event?: React.ChangeEvent<HTMLSelectElement>) => void
  disabled?: boolean
  loading?: boolean
  id?: string
  name?: string
  className?: string
}

/*
 * Pass in all options, the current value of the Select (which is an empty string if no
 * value is selected), and an onChange handler that updates the current value.
 *
 * Example usage
 * const options = [
 *   { value: '0', displayName: 'Orange' },
 *   { value: '1', displayName: 'Apple' },
 *   { value: '2', displayName: 'Mango' },
 * ]
 *
 * const [fruitValue, setFruitValue] = useState('')
 *
 * const handleFruitChange = (value: string) => {
 *   setFruitValue(value)
 * }
 *
 * <Select
 *   options={options}
 *   value={fruitValue}
 *   placeholder="Choose a fruit"
 *   onChange={handleFruitChange}
 * />
 */

const Select = React.forwardRef<HTMLSelectElement, Props>(
  (
    {
      options,
      value,
      placeholder,
      onChange,
      loading = false,
      disabled = false,
      id,
      name,
      className,
    },
    ref,
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target
      onChange(value, event)
    }

    return (
      <div className={classNames('select-container', className)}>
        <select
          ref={ref}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          disabled={loading || disabled}
          aria-busy={loading}
        >
          <option value="" key={-1}>
            {placeholder}
          </option>

          {options.map(({ value, displayName }) => (
            <option value={value} key={value}>
              {displayName || value}
            </option>
          ))}
        </select>

        <div className="select-icon">
          {loading ? (
            <LoadingSpinner size={35} fill={theme.colors.blueLight} />
          ) : (
            <ChevronIcon className="select-arrow" />
          )}
        </div>

        <style jsx>{`
          .select-container {
            position: relative;
            width: 100%;
          }

          .select-container:hover :global(.select-arrow) {
            fill: ${theme.colors.blueLight};
          }

          select {
            height: 50px;
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            background: ${theme.colors.white};
            box-shadow: 0px 8px 10px #00000029;
            cursor: pointer;
            -webkit-appearance: none;
            -moz-appearance: none;
            -ms-appearance: none;
            appearance: none;
          }
          select:focus {
            outline: none;
          }
          select::-ms-expand {
            display: none;
          }

          .select-icon {
            position: absolute;
            right: 0;
            bottom: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 50px;
            background: ${theme.colors.charcoal};
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            pointer-events: none;
          }

          .select-icon :global(.select-arrow) {
            border-radius: 0 5px 5px 0;
            fill: ${theme.colors.white};
            transition: 150ms all ease;
          }
        `}</style>
      </div>
    )
  },
)

export default Select
