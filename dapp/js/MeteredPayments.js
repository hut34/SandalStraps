// $import ("js/apis/MeteredPaymentsAPI.js");

const meteredPayments = {

	minimal: (k) => {
		return {
			w: `{>(regBase.minimal(@k))}
			`,
			f: {
				k: k,
			},			
		}
	},

	basic: (k) => {
		return {
			w: `{>(regBase.basic(@k))}
			`,
			f: {
				k: k,
			},			
		}
	},

	advanced: (k) => {
		var self = new Tilux({
			w: `<div id="{$@id}>"
					{>(regBase.advanced(@k))}
					<div>
					</div>
				</div>`,
			f: {
				k: k,
			}
		});
		return self;
	}
}


console.log("ran MeteredPayments.js");

