import React, { useState } from 'react';
import '../styles/components/MovieRow.css';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export function MovieRow({title, list}) {

	let moviesLength = list.results.length;
	const [scrollX, setScrollX] = useState(0);

	function handleNavigateBack() {
		let x = scrollX + Math.round(window.innerWidth - 280)
		if(x > 0) {
			x = 0
		}

		setScrollX(x)
	}

	function handleNavigateFront() {
		let x = scrollX - Math.round(window.innerWidth - 280)
		
		if((window.innerWidth - moviesLength*150) > x) {
			x = (window.innerWidth - moviesLength*150) - 60
		}


		setScrollX(x)
	}


	return (
		<div className="filmList">
			<h2>
				{title}
			</h2>
			<div className="filmListAreaScreen">

				<div className="navigateBack" onClick={handleNavigateBack}>
					<ArrowBackIosIcon style={{fontSize: "40", marginLeft: "15"}}/>
				</div>

				<div className="navigateFront" onClick={handleNavigateFront}>
					<ArrowForwardIosIcon style={{fontSize: "40"}}/>
				</div>
				
				<div 
					className="filmListRow" 
					style={{ width: moviesLength * 150, marginLeft: scrollX }}
				>
					{list.results.length > 0 && list.results.map((item, key) => 
						<div className="filmListItem" key={key}>
							{item.poster_path 
								?
									<img 
										src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
										alt={title}
									/>
								:
									<img 
										src={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFhUVFxUXGBgWGBgYFxcYGBgYHRgXGh0bHSggGBolGxcXITEhJSkrLi4uFyAzODMsNygtLisBCgoKDg0OGhAQGi0dHx0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABCEAABAwIDBQUFBgQEBgMAAAABAAIRAyEEEjEFE0FRYSJxgZHwBjJCobEHFFLB0eEjM2LxFXKCoiRTY5Ky4hZDg//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACERAQADAAIDAQEAAwAAAAAAAAABAhESIQMTMVFBBBQi/9oADAMBAAIRAxEAPwCRKFI1iWRfR183EeVLKs/E1YqVDnhzAwMEFwAcJLi1skyRExIUjca6ZkFov/LqB0CAdbTe35rPNriuQmhUMdiZpnO4NLWF8tbUb2xdtzYAi0H9ldquimXOGjC4gdGyQrFtSa4OEoWbTxdI2LXA6akiOzeQdJdqeRQDaFEj3XcALm/unnIEvOuuU9E5HGWoWpi1Vqb6Z3ZAPbPZ11AJvfT9QqjMfQOgPE8RYCdAeojT5K8k4tOEJpnVQGtRs4h18xkToHAE68ygONoEE5HCI0kz2W9Rzi+uUrM3xYonLUBChNSg4GRO74XsHZtOpyaH85MFavRyuIpn4zFrxmHO0ikLcJC1zg4SuEJBqomvSaQSyM2YWvZrZPf70Aay5Xf+HpucHt7TM0RqbMOugBJAvxA1lJ8kQR45k+VOyiToCe4K83a+CpS3dnsGHGST8XmeyfDyV9234symABpdYjy2n5VqfHWPssh+z3tGZwgddfJQCmr+M2g+pYwByHHvKqNHJdKzbO2JiN6DkHAKRuHU1HD8SnqOjipy/Fz9VnUuaSImUlUaGRPlUuRLKubam/CtLg8jtAQCLGOXUa68zzUZ2e3m+/8A1H8wbdq2g9ErRhNCYKTsIwtDXAuDTmGZznXvcyb66G0WU778FNCbKEwVNwz8I8h0/QeQQ/d2/hb5Dp+g8grxphAaKsJiq2g0aNAvOg1iJ8rIfuzfwt5aDTkrWQpQtMqz8O0xLQYMi3GQfqAfBG2m3i0eQ6foPIKwGdVwvt77S1sPXp06DsvYzuJa05i4kAdoGAMvDn0Wb2isbLdKzach2e7bwAvqIF+/mpKezHO0ZY8coiL/AKnzXkOwfa/EUK7alSo+qzMN4x5zBzeMB1g4DSIuBwsvoFlcOAAJuAdLQf7rl7d+Q6+rPssJ+yYHujjqGnvsqzMAHO7QB4nRdJWoPd2Weao1MCQcok8yPorW/wCpajErUaY+BvdAjn46lC6SNABpAAA7lvf4cdYAHW6p41hECBboukWj+Odqz/Wa3D8eCssc0CzfO/ipKdHmURYOSs9pEYqVHFxklRlvRXywcio3MVglWBPC3cEytAHn5WSTBZShMAjC5apoTZVYa9se6PMoe4JyXEJamhTgKVmBefhPjb6pN4hYrMqjQk5qvO2c/kjZgoHa15ArPtq165ZuUpiFeOH5BTUcHIIi/Na9kM8JZgpz+i8k+0vF0amLJpVN4QxrXQIawtkFrT8XMmNdCeHuWLqU8PQqVnNH8Jj3k6zlBMeMQvmBzpJPNcfL5OXTv4vHx7dj7E+xjsU5tSu1zMOATm0NQg2Y2bwby4Ai0ar2fCNBMwelrLg/sNqh9PE0nmchpPYCTYOFQPgd7WL1E0wBb5BZraIjpq1ZmULWgax9FITb8kzWDjogq4gfC2VfqfEGLxMDryWTVcSZMdy2ThHv1hoUR2fBtddK2rDnatpZtNhOn0U7MGeXmtA4eATyVdoHMq85n4nCI+om4VvGfBAaImzfzKmdSJ1J7kbH5bBOUmQiFAjgElaa4nQJLPJrif7vSiA098mVXfhe1DQY63VqnhTwMd6tNpcyCuHOYdOESofcj08kTMEOJ8ldLUgDyWedmvXU1Gm1ugU2aUEFO1ix3LXUE4IJsrG5lEzDJEKgp0VO3DyrFPDq5Qwy1spjzr7Y8RuNlvAsaz6dEeMvd/tpkeK8c+0HY9PCYzcUyDlo4fMPw1N0zPPUntH/ADr2X7cMXSp08AKvu/fGVHCJ/h0wc562eLdV4j7c0qjdo4sVZL/vFWS65ILyWnuLSCOhCo1Pst2qcPj6RP8ALquFCoeEVT2ZPAh7Wu7mlfRNfD8gvFvsl2bTxWB2rhtarqdKpTB4OpiqabgRcEVC2Y4EDivafZXGOxODoVqjctRzS2oP+pTcWVI6FzCRrYq6TCuMNKmZTDQtF+HQblXWYhQcSVXqytV1FQvohIkmGS6i4iLwmbRhaD2wo8y3ylnjCuKXRLcdApjUQmqE2U6R5EkWcJJ2vRNxE8FJKyGY5o4IxtELGQ00BiGF5YHNzgBxbIzAGYJEyAYN+iBm0KJ0q0/5m6s9v80CTS1/mR8Oq4d208m2HVCYY7DMpHv/AItUHyou81kezmKduqTn+9U2syuehq4YPjwzR4Ir1V+Notz56rG7vKX5nNGQPMMLpPZzHSdVHU2/gmPLHYvDte0lpY6tTDg4GC0gukGbQuD9ocVfanWns75VHLpsZVY7adAlrb4fFTYXJqYe566qDpKe0KBrHDitTNZok0g9u8AibtmdCD3FXaj2sa5zyGtaC5znEBrWgSSSbAAAmV5fg8Q37lhsVAFU7RFcuHvHe4t9JwJ4g0nBvcByC6z2yxwODq0/+cadC3KtUZTP+15UV0zcbSy03bxmWqWCm7MMtQvEsDDMOLhcRqqftXtpuGoOAr0KVeoC2jvqtOm0EkNNTtkZmszZiBJMQASQFxOFxo+5bLZxo42hRP8A+D61P6MHmtP2k23h6W0MLUxBGQYfFtux1TtF+HizWk6A3hMG/jdk4HHU6FDEVaeKqU2U67H5qe8cJA3wDLbtxEaZTpwXiv2ybPp1dtU6OHcwurNoU35SDlql5phro0cGhljeCF3+Mx4pbfo1BDWOwjMMYsBndiajfCcOB4rgfsxc3F7ar4uo2QDWxDc3Bz3gM8QHkjll6ILH2Ss/w7bWIw+IeGZaWIpuc45WEUy2pnuYAyUy6TwXvOy9o4eu0nDVqVVrTBNJ7XgHWDlJg8V4D7bVHU9tYt7gMtfB4jKTfsnAvZI5HPTLfA813G08a3CVGV6ADHVNlYrNlsHPw7KT6TiBq4Z3CdYMIPQMJtTD1n1GUa9Oo+kYqNY9rnMOkOANrgjvCrbT2zhsO4Nr4ijSc4SBVqMYSJiQHESJXIYGizDVdjbsAfwKuHeQAC9pw4qyY1O8pZu95XN/apVw7trbP+9ZdxkO8ze7lzumVR6fittYWmxlSpiaDKdT3HuqsDH/AOVxMO8FD/juENJ1YYmgaTDldUFVhY0mIaXAwDcW6hfORef8Kw4qzuxjqpbM+7uqWfL0mdOMrrvbChgxs/D1tnUicG3F7yswmocxADJO8JIFi3/WOaD1tuNoVKW+ZVpupAEmo17SwBvvEumBHGdFXwGLoYhpdQq06rQYJpva6DyMGy8h9pDh6OyqrsDWe6jjcSwlhgNpZd4/dhouCMrAZJkNae+37JPbhds1aVEZKTsNT7IJid1RdmN7mc1/6jzV2UyHrRwwQbhUP8T5JnbSnirspkLxw4TrP+/dUldk4w82y4kQQXkkc9PKyZoxZ+J/HU6+Wi2WlCKvBvDUnQLwx/kX/Hqnw1cdtPD4h76wAfny4fvAdvWfR7x5osXVxFPM5t2U8U17rRkIpU2hxPKHR0hdhQpzeTfTmTz6nlNgrTMO0WsTrBu1v9TvxHqVr3SnqhwVbFVn0sVVkubUbQa50y0lj9AeQzDzWxiq+JdiaJiHinWAng3NT6d3murwuHY1tx2Acwbpnf8AiI79ArIBLpn+I4Xd/wAtn4W9U90p6oeeYaq/d08IZNWnXALAbhjarquaPw5SIOhkLW23i8Q7c0muc2azHtMAkbprnggOsYLQY6BddRoM3ge0QKYIB4ucdSTqU2PdNRpBgsactvidbj0Ce6V9cPPW7Ur0mgVXfy8c2o5zgBDngvkgENF3OPDVbeJ9pwMTQrGqzLua7WukBsl9KROhIjSeC6eng252td2omo8ke88iBPQCYRmiw1p3YLWtDQIbALjJN+4K+6U9cOI25jKtepVfScC7c4Z9Nw/pq1TNrRDn+a5z2a9qBh8XVf7rKvZtcNgjLy7MT8l6xiKQL3tb2Q5rGm0Q1uZx+o8143sHYjcXijTzbtrnONh7rZ0HyC3TybHbNqZ8XftA266vVpiQd2x0ObEkVOEg3EDn8RWzs/b1XHdkRLMJXokaAGsGstrwZPisL252LQw2KFHD5g0UqZcXGSXGZPSbLu/YnYlLDUG16ZcajgN5Js5s3aBw5q2vkJFNlR2ft+rXq4PKb4dr3PGuR273WUiJa4lzrHks/wBq67qu0cIarQ8EAZXiWxmNouCF3eHwrWtIbDajCS1wsXAmRm/EDoltPDtrsa8WqNu08QeI81z90636ocH9o2NO6wzcjWsp1DlawANAAFgBAhXMX7fuNDPQoDc58lUOpjKA4Cey0wZBIva4XQ4t7azMtVgt8QN2nnCq0MLTDN06mCHEdppiQND3qx5p/D1Q82+7vfhcSaTHbgV2VGWMAN3jTHc17ZP9InRbXs7iqlfHVMVTaSBSY2SIGbIxsf7XeS7DGYJtMhtIENLYcJ7LhyI59VC7Zope4YHBzdW9HDRwT2ynqGcfiLw2eSB2MxMjs8LjWTyVijiOD4ngRo79FI8BYn/IvH8b9NZ/qn9/xHFseEpKwSEln/av+L6K/rKGInj5KbfyI4chYFYjanSFIyoeP6Lm6txmI/LXlyCmpVx15nqeqxadYcZUwrjQKaNtmIEgkmR3Kbf3JzWMcVgCopqdZXUx0LMWBayFuIEl3E/JYwxA5FI100xuMxESZ17lXbtEZ8ocZNzEW77LnNpY6IaCb+oTbLxJnKLQZJ4nkFdTGv7VbZFCk8j339luluuvRcV7CVsuKzE2DSSeip+1W1DVrHL7rbDv4lY9PFvZmLTGZsE8Y4rvWv8Ay5Wntf8AaDaIxGIqVZ950Nm3ZFm8eQXoXsnjWuoBhJEAAiQvJG958Fs7G2iabgRaPotXr10lZ7eu1a44EiOSjbVjiVzg2mXMzNMWlQ7P2g4kibQvP27dOgqwTM66wgcBAHzVF2I6qJ9dTkuL0jQknxURNwQTPmqTsQhdWTkYs1AD0QuqwIzeaqb9RurBNXFw1uqZZz3jr4QkoGACMQq7SilZFlrkeYKqHo2vRVlrhxUorWVIORB6gutqIhiFSNQ8028QVdsVZeItAVnA1MtF3MzfwWNj63aJU1DE/wAIieBXTOmN7YFQSfFQvYOXrorDvHyTA9AvRrliuKXT5o2UyNJUklONLppi7hdoODcpP9vBbOwq4JdrwXMg81tbGqQYXO8dN1+ujLgnNQBUjVSzrg6rTnBRFoPH5KLMhLkErqQ5qKoyOKYv6qNzkD5AkgJSQxDmTh6ja1GGBaxnT50e8QhoThqmKIPRbxCB0RBqmBw5IvTlC4pgw8aTKrCrDSLq1tIGVnyvRWOnKZ7IDqiTB0JStIcD1ZIhKUSgCFp7OnMFnrU2O25MrN/jVfrTkpg5ESg3g4Lg6nL/AFwQ5kUp5QMZjmoy71CIgapnFXERl3eEki5JVAhyfOoQ5PJWkT5kVN58FXaZFlK0/moJc/T80YKhdfikxsW8uCmKlJ7k8qOPNJQZm06ZWZPd69c1v4ulI1hYz2EGPp+y7Unpi0I56+vEIZPH80eVDC0yYOJTZkUKfC4MvPTmmxBhYWgXkD5rdo0gwRw5oadMNEDgjJXG1tdIjDueEAPElJ2nqU02hZxoWccxokH80DvV0wKuIN59d6hdURONlDKoYvSQ8dEyINEFEXJ83VaRM1ESeCikdU4coJA6EYcoiUxcoqwHpnOUMpyUFbH4mOKrjGW4eX6ptpP71Qa9da16Yme0r3piUmketEuv5futIWnr91uYIjKIWEHK1hMXlIHA9Vm0bC1nG1mSL5UQfaQnL1xdEgNlC7hdOHIZ5KoIOTFyElCSgTnIWpi5Rkq4g8ySAdU6BwQngaoUoWgYI7k8/n6uo45J8qgPed0J83GyAN6o+Hr6oCzIc49euiTvX7JFQUtpf2WYCtDGifUqg4x69XXavxixCVJHT8ks1v7pp7/mFUM1qkDb8AhaeQRtzcVJGvRFhdEGnmoaLoAlSE+uC4ug5KZCDPJDEIClAShcUOZUG480whR5jwPgna5UEnQ5kkDOqCdPkip1ZUIqcELjdVFsOPC+vL1wSa6fDz+SrMe6ZTsJ5+Xf3qC2J6oYjUqIVe9Bm4R6/NBYPCExUAqa39eKIPm/r90UREi6qPwfLXz+qsvdqhNTkrEzCTCg+RqPKyF3crr2T+yDdfrdaizOKwN+PzU7KRN/qjbSIvEfK3HXVODKTKxCy2pwnwt580+brHgoc0afmln4fv60Cxip5lMSq5PXw9aom1B/ZFSyhKDeoS9EGSmJmfXehDo0TOcqDlJRF06SEkwIdb/VEWhLRO5yBmtI1uE7TzIEJjy4ICURJnRNeL/ldRetYS70Epjn/dKUEJBxvwt68UUo5evJOXFC18d/05lOXHQICITAlA1yV/qgmz24XQA+BQzP7opE+rJgfjy7u9M4Dn6/snAB6x6lRudB4KoRCUJpTDkgcJw0c0xCEjogZK/gkeiYFAYB6eaSAHx+aSAwUxfpKGeicW5oDnpPGUgfkhnqnHQEwCbcBx4dQgYC9/XinHKUJbaeHPhxt8inaBE685+Q6IJAwShy+uqaCT2RreADoeXGOScC1wdY04nh3mNOiAiI4X+fmmCmoFknOHGxjLEiL/S6sllGAQKhGUyRHnPSYPC3mFbcOPwu8j189CfAoHU3CBlI5WPALo//AJFTEGatshAAAAinlP8A9namOUaWBBl2beo5mPeKpyE/CLTSbTcJL9ey46D3uGpuQmy5kU3HRp5iATIGp08EbKb/AMDvI98rewO3adOhTpO3gc1jpIbZ2aqHgjti0AjvNwYhW6vtVScHQ2oJBMhoOWaeQmzxbMRxHemQa5JwI1EeEIQei0vaDGtrVA9uYBtMNOYQRD39TaT5yOCzwPGZi2o6WvoVFAHFPdI+Np4chfyF0j9RN+XPusUDBPmTNvMDTWPz6ICDA+XnGqAkB10Thp6p2kHuQAX8zCSlczmElekRuBnj+SkagMp+s6IrQp4ei5rZrZXH3paXBt44DlHE/pZoOpsnJXAloA/hDQkEg2knsi9ljA6pxzTUxvUMcOy77xGbdl4NPNDgwDhqAS4W1jXihGPzZmvrNynLfJYjI8EFovaQNfjlZlSrUaO1YG0uaB3DRKjWtO8AmSZZ1PT1KupjTdiy2iMleQA0Bu60cIAaXAaw2e7mpGYmHEtxEknMAKJJOVoDSLX90TA+EqhQxz26VsswbMHvDwvdTsxhkGpWIy5S2KfDK8GOzyMA6dryumHdiAXS6rDqZIa8MlpbBbcaSQ4/9vip249phxr9oF0DINDUs7SB2WMPeeGijq4tpABxDnAntDdwcpytcZy65c3/AGjmoxUpySa51bfdD4pzWjhGuhkKaLVLGPktNcACA1wpTLCDLoAtYA680GFxAa92WsYMvJbT+LMwEmQbHXkLKpRx9QNaN9AAgDIIFoPC9kjtCpma/f8AaAIEM6t6f0M8k0xKzG7sNDawLewCN3BDeyJniWhre+OKP70wVDU+8CY405J7QOXSNWzpzUf3ljmgurOztDhanM9ouHDXtu15BAzdTBrEth1xTAg9kj4bgku5aJouDaIJcPvA4ZTu5nMDmBtqLDhqVFTrOY8BtUuBJmKZBDoL7CDIzkgxy7lUrVG2Das+9JLONoi1rSeOnVTUcfcbyuRlcwtLWC1nh3w6gEAf5vK6J6mMBaW78PBdBaKREsJa1x6DKCf9Krtx2RrMlcWExu9CGGL/ABXYxvjPBSt2kAW/8S6wOlMWLf5ZjKbSTbpwlVjUphvZrFxjQ0gL5ecWvaUF5uJnLUFdwJaBeiSD7hI0Ad2mhs/0Hmovv4cHNdXESQM1OzmhrWgEACPefx+EWCz6W0qrRAcQBPwt4kk8OZKr1arnuLnGXOJJ6k3OinIxbr4ShDyKxMXaCw3gG08yQL8JVF3O48vmnlNmUU7RHcnUbnibkeCSmCaqIZT7nf8Alz4/uowE7ny0AxAkW6ybpgqHBTN7XZFptx9RdGGa39dEj1juUVsbVxTatOAWiHB3vSSAHWEDW+v6oMFXGRgmlyOZxB94ySNNPXPJyevojwrqYzbwOMi2U3BnraIkK6mJ8YDUeTLB2RoZFrW6qXGYpzmhnZAaQDBJJI90Am8Rf0UL6uFPw1QQCLESTbrA16aFRtdRk2qEQ+0tmcwycR8Mz1jgqDdVZlAEfDHYEiGw6TYuk3/RRtc08Qf9P/tZTGthr9iqbWktt3QRxnVM92HDTl3maOzMWdlNzf3S6OZgKAcMQ0nNmgiOyYPztHrufGPYRLC4u07WU2vaxlGX4XQtq63uNOA1UOJNDL2G1M0WkiJkSTflm+WiCy19CG2IcJzCWOmbggyIi4iOWqjqPpEHKDPD3Y/8lHhHUMo3gq5rzkLcuo0m/uz4wpKTsPAJbVLuPu5dTyM6R80DUd2G9qSTe2URbQdu95vCh2Zk3rN5GS+a5HwnlpeFazYbg2tq6/Y0vAPdb5pn/ddQK3dLeYv5fMcEGgG4UhrpaJhzhLpu10t1tBIPgpAMHOrIm8uebRpHG8rKYcPPaFYibRl920cdZn5KtXLMrcgdMdqYubXFzH7q6Y3dpUMGKTjRe11SDbtRJIu0cCLkeXVc5lT9Uw6n9lmZXAvCZpCWTiDr6siQCaYPd5J04PW0J0EY18vokBA8P1SSVQYOqMHgkkooG8O9NSF46hJJEKsIIjiVHVcZju/JJJWCUjnIabtQkkoE4drwSJ+o+qSSocaKRh7QHSUklFStYE0W8k6SioyEx/P9UySIZghFwSSVAkdnwRA6d8fJMkkCKmMpgWElJJJJH//Z`} 
										alt={title}
									/>			
							}
						</div>	
					)}
				</div>
			</div>

		</div>
	)
}
