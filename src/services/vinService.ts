import { get } from "../utils/https"

const VIN_LENGTH = 17

export const filter = (vin: string) =>
    vin
        .replace(/[\W(ioq)]/gi, "")
        .toUpperCase()
        .slice(0, VIN_LENGTH)

export const validate = (vin: string): string => (vin.length === VIN_LENGTH ? null : "17 chars expected")

const findField = (fieldToFind: string, fields: VinResultEntry[]): VinResultEntry =>
    fields.find(({ Variable }: VinResultEntry) => Variable === fieldToFind)

const getValue = (field: VinResultEntry = {} as any): string => {
    return field.Value || ""
}

const hasResponse = (response: VinCheckResponse): boolean => !!(response && response.Results && response.Results.length)

export const convert = (response: VinCheckResponse): CarInfo => {
    if (!hasResponse(response)) return null

    const { Results } = response
    return {
        make: getValue(findField("Make", Results)),
        model: getValue(findField("Model", Results)),
        year: +getValue(findField("Model Year", Results)),
        trim: getValue(findField("Trim", Results)),
        vehicleType: getValue(findField("Vehicle Type", Results))
    }
}

export const apiCheck = async (vin: string): Promise<CarInfo> =>
    get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`).then(convert)
