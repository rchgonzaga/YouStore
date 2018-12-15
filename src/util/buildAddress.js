export const buildAddress = address =>
    address.address_components.reverse().reduce((acc, current) => {

        console.log('------------------------------------------------------------')
        console.log(current)
        console.log('------------------------------------------------------------')
        
        const value = current.long_name

        if (current.types.includes('street_number')) {
            acc.street += ', ' + value
        }

        if (current.types.includes('route')) {
            if (acc.street) {
                acc.street = value
            } else {
                acc.street = value
            }
        }

        if (current.types.includes('administrative_area_level_2')) {
            acc.city = value
        }

        if (current.types.includes('country')) {
            acc.country = value
        }

        if (current.types.includes('postal_code')) {
            acc.postalCode = value
        }

        if (current.types.includes('locality')) {
            acc.city = value
        }

        acc.geo = address.geometry.location

        return acc
    }, {})